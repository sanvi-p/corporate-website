// app/api/submitForm/route.js

import { NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

// Print all environment variables
console.log("Environment Variables:");
for (let key in process.env) {
    console.log(`${key}: ${process.env[key]}`);
}

// Function to get AWS credentials from GitHub Actions context
function getAwsCredentials() {
  const token = process.env.AWS_SESSION_TOKEN;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION;
  
  if (!token || !accessKeyId || !secretAccessKey || !region) {
    throw new Error('AWS credentials not found in GitHub Actions context');
  }
  
  return { token, accessKeyId, secretAccessKey, region };
}

export async function POST(req) {
  try {
    const { firstName, lastName, company, email, message } = await req.json();
    
    // Retrieve AWS credentials from GitHub Actions context
    const { token, accessKeyId, secretAccessKey, region } = getAwsCredentials();
    
    const client = new DynamoDBClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
        sessionToken: token
      }
    });
    
    const dynamoDb = DynamoDBDocumentClient.from(client);
    const TABLE_NAME = 'Contacts'; // Replace with your DynamoDB table name
    
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuidv4(), // Generate a unique ID for each entry
        firstName,
        lastName,
        company,
        email,
        message,
        createdAt: new Date().toISOString(),
      },
    };

    await dynamoDb.send(new PutCommand(params));
    return NextResponse.json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Error saving data' }, { status: 500 });
  }
}
