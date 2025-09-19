import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Upload, 
  Award, 
  BookOpen, 
  Calendar,
  MessageCircle,
  TrendingUp,
  FileText,
  Star,
  Users,
  Target,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// add a profile page
export const StudentDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
              <p className="text-primary-light">Roll No: {user.rollNumber} | {user.department}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout} className="text-white hover:bg-white/10">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">XP Points</p>
                  <p className="text-2xl font-bold text-primary">2,340</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Activities</p>
                  <p className="text-2xl font-bold text-primary">18</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold text-primary">92%</p>
                </div>
                <Calendar className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rank</p>
                  <p className="text-2xl font-bold text-primary">#7</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      Upload Documents
                    </CardTitle>
                    <CardDescription>
                      Upload certificates, projects, and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-lg font-medium mb-2">Drop files here or click to upload</p>
                      <p className="text-sm text-muted-foreground">
                        Supported formats: PDF, DOC, JPG, PNG (Max 10MB)
                      </p>
                      <Button variant="hero" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Recent Uploads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Hackathon Certificate', status: 'Approved', date: '2 days ago' },
                        { name: 'Project Report', status: 'Pending', date: '1 week ago' },
                        { name: 'Internship Letter', status: 'Approved', date: '2 weeks ago' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.date}</p>
                          </div>
                          <Badge variant={item.status === 'Approved' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => setChatOpen(!chatOpen)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  AI Assistant
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Co-curricular Activities</CardTitle>
                <CardDescription>Track your participation and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    { title: 'Tech Fest 2024', category: 'Competition', points: 150, status: 'Completed' },
                    { title: 'Community Service', category: 'Volunteer', points: 100, status: 'Ongoing' },
                    { title: 'Research Project', category: 'Academic', points: 200, status: 'Approved' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground">{activity.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">+{activity.points} XP</p>
                        <Badge variant="outline">{activity.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>CGPA</span>
                        <span className="font-bold">8.7/10</span>
                      </div>
                      <Progress value={87} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Attendance</span>
                        <span className="font-bold">92%</span>
                      </div>
                      <Progress value={92} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { task: 'Assignment 3 - Data Structures', due: '3 days', urgent: true },
                      { task: 'Project Presentation', due: '1 week', urgent: false },
                      { task: 'Mid-term Exam Prep', due: '2 weeks', urgent: false }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{item.task}</p>
                          <p className="text-xs text-muted-foreground">Due in {item.due}</p>
                        </div>
                        {item.urgent && <Badge variant="destructive">Urgent</Badge>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>Your earned badges and recognition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Tech Leader', icon: '🚀', earned: true },
                    { name: 'Team Player', icon: '👥', earned: true },
                    { name: 'Innovation', icon: '💡', earned: false },
                    { name: 'Social Impact', icon: '🌟', earned: true },
                    { name: 'Academic Star', icon: '📚', earned: true },
                    { name: 'Presenter', icon: '🎤', earned: false },
                    { name: 'Researcher', icon: '🔬', earned: true },
                    { name: 'Mentor', icon: '👨‍🏫', earned: false }
                  ].map((badge, index) => (
                    <div 
                      key={index} 
                      className={`text-center p-4 rounded-lg border-2 ${
                        badge.earned 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted bg-muted/50 opacity-50'
                      }`}
                    >
                      <div className="text-2xl mb-2">{badge.icon}</div>
                      <p className="text-sm font-medium">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>Personalized recommendations based on your activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h3 className="font-semibold text-primary mb-2">Strength Analysis</h3>
                    <p className="text-sm">
                      Based on your activities, you show strong leadership and technical skills. 
                      Consider applying for team lead positions in upcoming projects.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-success/5 rounded-lg border-l-4 border-success">
                    <h3 className="font-semibold text-success mb-2">Career Recommendations</h3>
                    <p className="text-sm">
                      Your profile aligns well with Software Engineering and Product Management roles. 
                      Consider pursuing internships in these areas.
                    </p>
                  </div>

                  <div className="p-4 bg-warning/5 rounded-lg border-l-4 border-warning">
                    <h3 className="font-semibold text-warning mb-2">Growth Opportunities</h3>
                    <p className="text-sm">
                      To strengthen your profile, consider participating in research projects 
                      and obtaining industry certifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* AI Chat Assistant */}
        {chatOpen && (
          <Card className="fixed bottom-4 right-4 w-80 shadow-elevated z-50">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">AI Assistant</CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setChatOpen(false)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="h-40 bg-muted rounded p-2 text-sm">
                <p className="text-muted-foreground mb-2">Assistant: How can I help you today?</p>
                <p className="text-xs">• Upload document guidance</p>
                <p className="text-xs">• Career recommendations</p>
                <p className="text-xs">• Activity suggestions</p>
              </div>
              <div className="flex space-x-2">
                <input 
                  placeholder="Type your message..." 
                  className="flex-1 text-sm p-2 border rounded"
                />
                <Button size="sm" variant="hero">Send</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};