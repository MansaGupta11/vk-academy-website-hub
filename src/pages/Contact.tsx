
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vk-indigo to-vk-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Have questions about our courses or want to enroll? Get in touch with us today.
            </p>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 - Address */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-vk-blue mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Our Location</h3>
                <p className="text-gray-600">
                  123 Education Street<br />
                  Academic City, 10001<br />
                  India
                </p>
              </div>
              
              {/* Card 2 - Email */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-vk-green mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:info@vkacademy.com" className="hover:text-vk-blue">
                    info@vkacademy.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:admissions@vkacademy.com" className="hover:text-vk-blue">
                    admissions@vkacademy.com
                  </a>
                </p>
              </div>
              
              {/* Card 3 - Phone */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-vk-indigo mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+9112345678901" className="hover:text-vk-blue">
                    +91 1234 567 890
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+9198765432101" className="hover:text-vk-blue">
                    +91 9876 543 210
                  </a>
                </p>
              </div>
              
              {/* Card 4 - Hours */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Working Hours</h3>
                <p className="text-gray-600 mb-2">
                  Monday - Friday
                </p>
                <p className="text-gray-600 font-medium">
                  10:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-vk-slate mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you shortly. We're here to answer any questions you may have about our courses.
                </p>
                <ContactForm />
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold text-vk-slate mb-6">Find Us</h2>
                <div className="bg-white p-2 rounded-lg shadow-md h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.747030306292!2d77.21763931508107!3d28.55207998244644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26e02e24ef1%3A0x546de874b4bef9b2!2sAll%20India%20Institute%20Of%20Medical%20Sciences%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1620283333279!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy"
                    title="VK Academy Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our coaching programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-vk-slate mb-3">What are your teaching hours?</h3>
                <p className="text-gray-600">
                  We are open Monday through Friday from 10:00 AM to 10:00 PM. Classes are scheduled throughout these hours to accommodate different student needs.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-vk-slate mb-3">How can I enroll in a course?</h3>
                <p className="text-gray-600">
                  You can enroll by visiting our center, filling out the contact form on our website, or calling us. Our administrative staff will guide you through the enrollment process.
                </p>
              </div>
              
              {/* FAQ 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-vk-slate mb-3">What is your fee structure?</h3>
                <p className="text-gray-600">
                  Our fees vary depending on the course, duration, and level. Please contact us or visit the courses page for detailed information about the fee structure.
                </p>
              </div>
              
              {/* FAQ 4 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-vk-slate mb-3">Do you offer online classes?</h3>
                <p className="text-gray-600">
                  Yes, we offer both in-person and online classes for most of our courses. Please contact us for specific information about online options for your preferred course.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
