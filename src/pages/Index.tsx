import React from 'react';
import { RoleCard } from '@/components/RoleCard';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-education.jpg';
import studentIcon from '@/assets/student-icon.jpg';
import staffIcon from '@/assets/staff-icon.jpg';
import adminIcon from '@/assets/admin-icon.jpg';
import { GraduationCap, Users, Shield, BookOpen, Award, TrendingUp, Calendar, Bell, ExternalLink } from 'lucide-react';

// AnnouncementCard Component
const AnnouncementCard = ({ title, description, date, image, priority = 'normal' }) => {
  const getPriorityStyles = () => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-l-red-500 bg-red-50/50';
      case 'medium':
        return 'border-l-4 border-l-yellow-500 bg-yellow-50/50';
      default:
        return 'border-l-4 border-l-blue-500 bg-blue-50/50';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden ${getPriorityStyles()}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">{title}</h3>
          {priority === 'high' && (
            <Bell className="h-5 w-5 text-red-500 flex-shrink-0 ml-2" />
          )}
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <Button 
          variant="outline" 
          className="w-full group hover:bg-primary hover:text-white transition-colors duration-200"
        >
          View Details
          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  );
};

const Index = () => {
  // Sample announcement data
  const announcements = [
    {
      title: "New AI Portfolio Analysis Feature",
      description: "We've launched an advanced AI system that provides personalized career recommendations based on your academic portfolio and co-curricular activities.",
      date: "Dec 15, 2024",
      image: heroImage, // Using existing image as placeholder
      priority: "high"
    },
    {
      title: "Winter Break Activity Submission",
      description: "Submit your winter break internships, certifications, and project work before January 15th to get them included in your semester portfolio.",
      date: "Dec 10, 2024",
      image: heroImage,
      priority: "medium"
    },
    {
      title: "NAAC Accreditation Success",
      description: "Our institution has successfully achieved NAAC A+ grade accreditation. Thanks to all students and faculty for their contributions through EduVault.",
      date: "Dec 8, 2024",
      image: heroImage,
      priority: "normal"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 87, 122, 0.8), rgba(56, 142, 60, 0.8)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">EduVault</h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your Digital Academic Portfolio & Activity Management System
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="h-5 w-5 mr-2" />
              <span>Portfolio Management</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="h-5 w-5 mr-2" />
              <span>Activity Tracking</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>AI Insights</span>
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Started Today
          </Button>
        </div>
      </section>
      
      {/* Announcements Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Announcements 📢</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news, features, and important notifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <AnnouncementCard
                key={index}
                title={announcement.title}
                description={announcement.description}
                date={announcement.date}
                image={announcement.image}
                priority={announcement.priority}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Role Selection Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Portal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access your personalized dashboard based on your role in the institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RoleCard
              role="student"
              title="Student"
              description="Manage your academic portfolio and track co-curricular activities"
              icon={studentIcon}
              features={[
                'Upload certificates & documents',
                'Track activity participation',
                'View AI-powered insights',
                'Generate verified portfolio',
                'Gamification with badges & XP',
                'Academic progress tracking'
              ]}
            />
            
            <RoleCard
              role="staff"
              title="Faculty"
              description="Review student activities and manage approvals efficiently"
              icon={staffIcon}
              features={[
                'Approve student activities',
                'Award XP points to students',
                'Search students by skills',
                'View department analytics',
                'Bulk approval workflows',
                'AI-assisted verification'
              ]}
            />
             <RoleCard
              role="mentor"
              title="Mentor"
              description="Guide and support students through their academic and co-curricular journey"
              icon={adminIcon}
              features={[
                'Provide guidance on portfolios',
                'Verify student activities',
                'Connect students with opportunities',
                'Review student progress',
                'Offer personalized feedback'
              ]}
              />
            <RoleCard
              role="admin"
              title="Admin"
              description="Comprehensive system administration and institutional analytics"
              icon={adminIcon}
              features={[
                'Institution-wide analytics',
                'Generate NAAC/NIRF reports',
                'User management & roles',
                'System configuration',
                'Performance dashboards',
                'Integration management'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for modern educational portfolio management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: 'Gamification System',
                description: 'Badges, XP points, and leaderboards to motivate student engagement'
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-success" />,
                title: 'AI-Powered Insights',
                description: 'Smart recommendations for career paths and skill development'
              },
              {
                icon: <Shield className="h-8 w-8 text-info" />,
                title: 'Verified Portfolios',
                description: 'Faculty-approved, exportable portfolios for placements and audits'
              },
              {
                icon: <Users className="h-8 w-8 text-secondary" />,
                title: 'Smart Search',
                description: 'Find students by skills, activities, or achievements instantly'
              },
              {
                icon: <BookOpen className="h-8 w-8 text-warning" />,
                title: 'LMS Integration',
                description: 'Seamless connection with existing learning management systems'
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-primary" />,
                title: 'Compliance Ready',
                description: 'NAAC, NIRF, and AICTE compliant reporting and documentation'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 mr-2" />
                <h3 className="text-2xl font-bold">EduPortal</h3>
              </div>
              <p className="text-primary-light mb-4">
                Empowering educational institutions with modern portfolio management 
                and activity tracking solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-primary-light">
                <li>Student Portfolios</li>
                <li>Activity Tracking</li>
                <li>AI Insights</li>
                <li>Analytics Dashboard</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-light">
                <li>Documentation</li>
                <li>Training</li>
                <li>Integration Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-primary-light">
            <p>&copy; 2024 EduPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;