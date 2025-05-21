
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Users, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: 'Mathematics Mastery',
      description: 'Comprehensive mathematics course covering algebra, calculus, and more for all academic levels.',
      price: 'From ₹5,000',
      duration: '4 Months',
      level: 'All Levels',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      popular: true,
    },
    {
      id: 2,
      title: 'Science Explorer',
      description: 'Explore physics, chemistry and biology with hands-on experiments and detailed theory sessions.',
      price: 'From ₹6,000',
      duration: '5 Months',
      level: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80',
    },
    {
      id: 3,
      title: 'English Excellence',
      description: 'Master English language skills including grammar, vocabulary, writing, and spoken communication.',
      price: 'From ₹4,500',
      duration: '3 Months',
      level: 'Beginner',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "VK Academy transformed my academic performance. I improved from a C to an A in mathematics within just three months!",
      name: "Priya Sharma",
      title: "Student, Class 10",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      quote: "The teachers at VK Academy are exceptional. Their approach to complex subjects made learning enjoyable and effective for my daughter.",
      name: "Rajesh Kumar",
      title: "Parent",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      quote: "The personalized attention and structured curriculum helped me crack my entrance exams with flying colors!",
      name: "Arjun Singh",
      title: "Engineering Student",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          title="Unlock Your Academic Potential"
          subtitle="Excellence in Education"
          description="VK Academy provides quality coaching to help students excel in their academic journey. Join us and experience the difference in learning."
          ctaText="Explore Courses"
          ctaLink="/courses"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/about"
        />
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Why Choose VK Academy?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're dedicated to providing exceptional educational experiences that help students achieve academic excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-vk-blue mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from experienced teachers who are passionate about education and student success.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-vk-green mb-4">
                  <Book className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">
                  Well-structured courses designed to cover all aspects of the subject matter thoroughly.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-vk-indigo mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Our methodology has helped thousands of students achieve their academic goals.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">
                  Monday to Friday, 10AM to 10PM – convenient hours to fit your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Featured Courses</h2>
                <p className="text-xl text-gray-600">
                  Discover our most popular courses to begin your learning journey.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <Button 
                  asChild
                  variant="outline" 
                  className="border-vk-blue text-vk-blue hover:bg-vk-blue hover:text-white"
                >
                  <Link to="/courses">
                    View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  price={course.price}
                  duration={course.duration}
                  level={course.level}
                  imageUrl={course.imageUrl}
                  popular={course.popular}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-vk-blue text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                For over a decade, we've been helping students achieve academic excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">1,200+</div>
                <div className="text-xl opacity-90">Students Taught</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-xl opacity-90">Expert Instructors</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">12</div>
                <div className="text-xl opacity-90">Years of Excellence</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-xl opacity-90">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">What Our Students Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from our students about their experience with VK Academy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  avatarUrl={testimonial.avatarUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-vk-indigo to-vk-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Learning Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Enroll today and take the first step towards academic excellence with VK Academy.
            </p>
            <Button 
              asChild
              className="bg-white text-vk-blue hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
