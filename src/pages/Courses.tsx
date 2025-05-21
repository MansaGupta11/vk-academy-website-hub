
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Course data
  const allCourses = [
    // Mathematics Courses
    {
      id: 1,
      title: 'Mathematics for Class 10',
      description: 'Comprehensive course covering CBSE Mathematics syllabus for Class 10 students.',
      price: '₹5,000',
      duration: '4 Months',
      level: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      popular: true,
      category: 'mathematics',
    },
    {
      id: 2,
      title: 'Mathematics for Class 12',
      description: 'In-depth course covering Class 12 Mathematics for board exams and competitive preparation.',
      price: '₹6,500',
      duration: '5 Months',
      level: 'Advanced',
      imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      popular: true,
      category: 'mathematics',
    },
    {
      id: 3,
      title: 'JEE Mathematics',
      description: 'Specialized course focusing on advanced mathematics topics and problem-solving for JEE aspirants.',
      price: '₹8,000',
      duration: '6 Months',
      level: 'Advanced',
      imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'mathematics',
    },
    
    // Science Courses
    {
      id: 4,
      title: 'Physics for Class 11',
      description: 'Comprehensive physics course covering mechanics, thermodynamics, and more for Class 11 students.',
      price: '₹6,000',
      duration: '5 Months',
      level: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1636466497217-06a74dec964e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'science',
    },
    {
      id: 5,
      title: 'Chemistry for Class 12',
      description: 'Complete chemistry course for Class 12 students covering organic, inorganic, and physical chemistry.',
      price: '₹6,500',
      duration: '5 Months',
      level: 'Advanced',
      imageUrl: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      popular: true,
      category: 'science',
    },
    {
      id: 6,
      title: 'Biology for NEET',
      description: 'Comprehensive biology course designed specifically for NEET aspirants with practice tests.',
      price: '₹7,500',
      duration: '6 Months',
      level: 'Advanced',
      imageUrl: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'science',
    },
    
    // English Courses
    {
      id: 7,
      title: 'English Grammar',
      description: 'Master English grammar rules and improve your writing and speaking skills.',
      price: '₹4,000',
      duration: '3 Months',
      level: 'Beginner',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
      category: 'english',
    },
    {
      id: 8,
      title: 'English Literature',
      description: 'Explore classic and contemporary literature while developing critical analysis skills.',
      price: '₹4,500',
      duration: '4 Months',
      level: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      category: 'english',
    },
    
    // Computer Science Courses
    {
      id: 9,
      title: 'Introduction to Programming',
      description: 'Learn the fundamentals of programming using Python with practical exercises and projects.',
      price: '₹5,500',
      duration: '3 Months',
      level: 'Beginner',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80',
      popular: true,
      category: 'computer',
    },
    {
      id: 10,
      title: 'Web Development',
      description: 'Comprehensive course on HTML, CSS, and JavaScript for building modern websites.',
      price: '₹7,000',
      duration: '4 Months',
      level: 'Intermediate',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      category: 'computer',
    },
  ];
  
  // Filter courses based on search query
  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get courses by category
  const getMathematicsCourses = () => filteredCourses.filter(course => course.category === 'mathematics');
  const getScienceCourses = () => filteredCourses.filter(course => course.category === 'science');
  const getEnglishCourses = () => filteredCourses.filter(course => course.category === 'english');
  const getComputerCourses = () => filteredCourses.filter(course => course.category === 'computer');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vk-blue to-vk-indigo text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our comprehensive range of courses designed to help you excel academically.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-lg mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="text"
                placeholder="Search courses..."
                className="pl-10 py-6 bg-white text-vk-slate text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* Courses Tabs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                <TabsTrigger value="all" className="text-lg">All Courses</TabsTrigger>
                <TabsTrigger value="mathematics" className="text-lg">Mathematics</TabsTrigger>
                <TabsTrigger value="science" className="text-lg">Science</TabsTrigger>
                <TabsTrigger value="english" className="text-lg">English</TabsTrigger>
                <TabsTrigger value="computer" className="text-lg">Computer Science</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No courses found matching your search.</h3>
                    <p className="text-gray-500 mt-2">Try different keywords or browse through our categories.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="mathematics" className="mt-6">
                {getMathematicsCourses().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getMathematicsCourses().map((course) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No mathematics courses found matching your search.</h3>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="science" className="mt-6">
                {getScienceCourses().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getScienceCourses().map((course) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No science courses found matching your search.</h3>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="english" className="mt-6">
                {getEnglishCourses().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getEnglishCourses().map((course) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No English courses found matching your search.</h3>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="computer" className="mt-6">
                {getComputerCourses().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getComputerCourses().map((course) => (
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
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No computer science courses found matching your search.</h3>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Course Registration Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">How to Enroll</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Joining VK Academy is easy. Follow these simple steps to begin your learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-vk-blue text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Choose Your Course</h3>
                <p className="text-gray-600">
                  Browse our courses and select the one that matches your academic needs and goals.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-vk-blue text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out through our contact form, phone, or visit our center to register for your selected course.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-vk-blue text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-vk-slate mb-2">Begin Learning</h3>
                <p className="text-gray-600">
                  Complete the enrollment process, pay the course fee, and start your academic journey with us.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Schedule Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vk-slate mb-4">Course Schedule</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We offer flexible schedules to accommodate your needs. Classes run Monday through Friday from 10AM to 10PM.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Days</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Morning Batch</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Afternoon Batch</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Evening Batch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-vk-slate">Mathematics (Class 10)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mon, Wed, Fri</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:00 PM - 4:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 PM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-vk-slate">Physics (Class 11)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tue, Thu, Sat</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:00 PM - 4:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 PM - 8:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-vk-slate">Chemistry (Class 12)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mon, Wed, Fri</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">11:00 AM - 1:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3:00 PM - 5:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 PM - 9:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-vk-slate">English Grammar</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tue, Thu</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 12:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5:00 PM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-vk-slate">Introduction to Programming</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wed, Fri</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2:00 PM - 4:00 PM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 PM - 9:00 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>Note: Additional batches may be arranged based on demand. Please contact us for more information.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
