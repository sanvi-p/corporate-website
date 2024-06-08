// app/api/submitForm/route.js

import { NextResponse } from 'next/server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const dynamoDb = DynamoDBDocumentClient.from(client);
const TABLE_NAME = 'Contacts'; // Replace with your DynamoDB table name

export async function POST(req) {
  try {
    const { firstName, lastName, company, email, message } = await req.json();

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
