
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Vinod Kumar",
      role: "Founder & Director",
      bio: "Dr. Kumar has over 20 years of teaching experience and holds a PhD in Mathematics from Delhi University.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Dr. Priya Singh",
      role: "Senior Physics Instructor",
      bio: "Dr. Singh specializes in Physics and has helped hundreds of students excel in competitive exams.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Prof. Rajesh Verma",
      role: "Chemistry Expert",
      bio: "Prof. Verma brings rich industry experience to his teaching, making complex concepts easy to understand.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Ms. Anjali Kumar",
      role: "English Literature Specialist",
      bio: "Ms. Kumar is passionate about literature and has authored several textbooks for high school students.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-vk-blue to-vk-indigo text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About VK Academy</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Founded in 2010, VK Academy is dedicated to providing quality education and helping students achieve academic excellence.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-vk-slate mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  VK Academy was established with a vision to transform education and provide students with a supportive learning environment that encourages growth and excellence.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  What started as a small tutoring center has now grown into a comprehensive educational institution serving hundreds of students across various subjects and grade levels.
                </p>
                <p className="text-lg text-gray-600">
                  Our founder, Dr. Vinod Kumar, believed that every student has the potential to excel with the right guidance and resources. That belief continues to drive our approach to education today.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-vk-blue rounded-xl transform translate-x-4 translate-y-4 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="VK Academy campus" 
                  className="relative z-10 rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We are guided by our commitment to educational excellence and student success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-vk-slate mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-4">
                  To provide exceptional educational experiences that empower students to achieve academic excellence and develop a lifelong love for learning.
                </p>
                <p className="text-lg text-gray-600">
                  We strive to create an environment where students can grow intellectually, build confidence, and develop the skills needed to succeed in their academic and professional endeavors.
                </p>
              </div>
              
              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-vk-slate mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vk-green mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-vk-slate">Excellence</h4>
                      <p className="text-gray-600">We strive for the highest standards in everything we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vk-green mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-vk-slate">Integrity</h4>
                      <p className="text-gray-600">We act with honesty, transparency, and ethical behavior.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vk-green mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-vk-slate">Innovation</h4>
                      <p className="text-gray-600">We embrace new ideas and approaches to enhance learning.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-vk-green mr-2 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-semibold text-vk-slate">Respect</h4>
                      <p className="text-gray-600">We value diversity and treat everyone with dignity.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our experienced educators are passionate about teaching and dedicated to student success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-vk-slate mb-1">{member.name}</h3>
                    <p className="text-vk-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Facilities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Our Facilities</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide a conducive environment for learning with state-of-the-art facilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Facility 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80" 
                  alt="Modern Classrooms" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-vk-slate mb-2">Modern Classrooms</h3>
                  <p className="text-gray-600">
                    Spacious, well-lit classrooms equipped with digital learning tools for an enhanced learning experience.
                  </p>
                </div>
              </div>
              
              {/* Facility 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Science Laboratory" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-vk-slate mb-2">Science Laboratory</h3>
                  <p className="text-gray-600">
                    Well-equipped lab for practical experiments that reinforce theoretical concepts in physics, chemistry, and biology.
                  </p>
                </div>
              </div>
              
              {/* Facility 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Library" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-vk-slate mb-2">Library & Study Center</h3>
                  <p className="text-gray-600">
                    A quiet space with extensive resources for research, study, and academic exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-vk-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join VK Academy Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the difference with our personalized approach to education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                className="bg-white text-vk-blue hover:bg-gray-100"
              >
                <Link to="/courses">
                  Explore Our Courses
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-vk-blue"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
