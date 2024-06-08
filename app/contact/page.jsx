'use client';
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};
  
    const requiredFields = ['firstName', 'lastName', 'email', 'message'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        valid = false;
        newErrors[field] = 'This field is required';
      }
    });
  
    if (formData.email && !validateEmail(formData.email)) {
      valid = false;
      newErrors.email = 'Invalid email address';
    }
  
    setErrors(newErrors);
  
    if (!valid) {
      return;
    }
  
    try {
      const response = await fetch('/corporate-website/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Show the thank you message
      setShowThankYou(true);
  
      // Reset the form data after submission
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        message: ''
      });
      setAgreed(false);
  
      // Hide the thank you message after a delay
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000); // Hide after 3 seconds
  
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  
  
  

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 ">
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground ">Please feel free to ask anything </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5 ">
            <Input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="mt-2.5 ">
            <Input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Input type="text" id="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            </div>
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="sm:col-span-2 ">
            <div className="mt-2.5 ">
              <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Type your Message Here..." />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>
          <Switch.Group as="div">
            <div>
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-primary ' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 '
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5 ' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white  shadow-sm ring-1 ring-gray-900/5  dark:ring-black-900/5  transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600 ">
              By selecting this, you agree to our {' '}
              <a href="#" className="font-semibold text-primary">
                Privacy Policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
          <div>
            <Button type="submit" className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 ">
              Let's talk <TbArrowUpRight className="w-5 h-5 ml-2"/>
            </Button>
          </div>
        </div>
      </form>
      {/* Popup */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-primary  p-8 rounded shadow-lg transform transition-transform duration-300 ease-in-out scale-95 opacity-0 animate-popup">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="mb-4">Your message has been sent successfully.</p>
            {/* <Button onClick={() => setShowThankYou(false)} className="mt-4 px-4 py-2 bg-primary text-white rounded">Close</Button> */}
          </div>
        </div>
      )}
    </div>
  );
}
