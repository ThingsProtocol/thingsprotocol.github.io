"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // In a real application, you would send the form data to your API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // For demo purposes, we'll just simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-2xl mx-auto">
        <p className="mb-8">
          Have questions or want to learn more about our MM Intelligence? Fill out the form below
          and our team will get back to you as soon as possible.
        </p>
        
        {submitSuccess && (
          <div className="bg-green-900/50 border border-green-700 text-green-100 px-4 py-3 rounded-lg mb-6">
            Thank you for your message! We'll get back to you shortly.
          </div>
        )}
        
        {submitError && (
          <div className="bg-red-900/50 border border-red-700 text-red-100 px-4 py-3 rounded-lg mb-6">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Platform Support">Platform Support</option>
              <option value="Partnership Opportunity">Partnership Opportunity</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors duration-200 
                ${isSubmitting ? 'bg-blue-800 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="font-medium mb-2">Email Support</h4>
              <p className="text-gray-300">support@marketmaking.example</p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="font-medium mb-2">Join Our Community</h4>
              <p className="text-gray-300">
                <a href="#" className="text-blue-400 hover:text-blue-300">Discord</a> | 
                <a href="#" className="text-blue-400 hover:text-blue-300 ml-2">Telegram</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 