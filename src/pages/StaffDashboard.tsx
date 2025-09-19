import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  CheckCircle, 
  XCircle, 
  Clock,
  Users,
  Award,
  BarChart3,
  FileCheck,
  Search,
  Filter,
  LogOut,
  Upload,
  File,
  Calendar,
  Eye,
  Download,
  Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const StaffDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
      <header className="bg-gradient-secondary text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">Welcome, {user.name}!</h1>
              <p className="text-green-200">Employee ID: {user.employeeId} | {user.department}</p>
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
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-warning">12</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Students</p>
                  <p className="text-2xl font-bold text-primary">156</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved Today</p>
                  <p className="text-2xl font-bold text-success">8</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">XP Awarded</p>
                  <p className="text-2xl font-bold text-primary">2,340</p>
                </div>
                <Award className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="circulars">Circulars</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="awards">Award XP</TabsTrigger>
          </TabsList>

          <TabsContent value="approvals" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Pending Approvals</CardTitle>
                    <CardDescription>Review and approve student activities</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      student: 'Alex Johnson',
                      rollNo: 'CS2021001',
                      activity: 'Hackathon Certificate',
                      category: 'Technical',
                      date: '2024-01-15',
                      document: 'certificate.pdf'
                    },
                    {
                      student: 'Sarah Chen',
                      rollNo: 'CS2021002',
                      activity: 'Volunteer Work',
                      category: 'Social Service',
                      date: '2024-01-14',
                      document: 'volunteer_cert.pdf'
                    },
                    {
                      student: 'Mike Wilson',
                      rollNo: 'CS2021003',
                      activity: 'Research Paper',
                      category: 'Academic',
                      date: '2024-01-13',
                      document: 'research_paper.pdf'
                    }
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>{item.student.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{item.student}</p>
                              <p className="text-sm text-muted-foreground">{item.rollNo}</p>
                            </div>
                          </div>
                          <div className="ml-11">
                            <h3 className="font-medium">{item.activity}</h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <Badge variant="outline">{item.category}</Badge>
                              <span className="text-sm text-muted-foreground">{item.date}</span>
                              <button className="text-sm text-primary hover:underline">
                                View {item.document}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                          <Button variant="success" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Student Search & Management</CardTitle>
                <CardDescription>Find students by various criteria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <input 
                      placeholder="Search by name, roll number, or skill..."
                      className="flex-1 p-2 border rounded-md"
                    />
                    <Button variant="hero">Search</Button>
                  </div>
                  
                  <div className="grid gap-4">
                    {[
                      {
                        name: 'Alex Johnson',
                        rollNo: 'CS2021001',
                        skills: ['JavaScript', 'React', 'Node.js'],
                        activities: 18,
                        xp: 2340
                      },
                      {
                        name: 'Sarah Chen',
                        rollNo: 'CS2021002',
                        skills: ['Python', 'Machine Learning', 'AI'],
                        activities: 15,
                        xp: 1890
                      },
                      {
                        name: 'Mike Wilson',
                        rollNo: 'CS2021003',
                        skills: ['Java', 'Spring Boot', 'Database'],
                        activities: 12,
                        xp: 1560
                      }
                    ].map((student, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{student.name}</h3>
                              <p className="text-sm text-muted-foreground">{student.rollNo}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{student.activities} Activities</p>
                            <p className="text-sm text-muted-foreground">{student.xp} XP</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-1">
                            {student.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="circulars" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upload Form */}
              <Card className="lg:col-span-1 shadow-card">
                <CardHeader>
                  <CardTitle>Upload Circular</CardTitle>
                  <CardDescription>Add new institutional circulars</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <input 
                      placeholder="Circular title..."
                      className="w-full p-2 border rounded-md mt-1"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>Academic</option>
                      <option>Administrative</option>
                      <option>Events</option>
                      <option>Examinations</option>
                      <option>General</option>
                      <option>Important Notice</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Priority</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Target Audience</label>
                    <select className="w-full p-2 border rounded-md mt-1">
                      <option>All Students</option>
                      <option>Final Year</option>
                      <option>Specific Department</option>
                      <option>Faculty Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <textarea 
                      placeholder="Brief description..."
                      className="w-full p-2 border rounded-md mt-1 h-20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Upload File</label>
                    <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX (max 10MB)
                      </p>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <Button variant="hero" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Circular
                  </Button>
                </CardContent>
              </Card>

              {/* Circulars List */}
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Circulars</CardTitle>
                      <CardDescription>Manage uploaded circulars</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: 'Mid-Semester Examination Schedule',
                        category: 'Examinations',
                        priority: 'High',
                        date: '2024-01-16',
                        uploadedBy: 'Dr. Smith',
                        target: 'All Students',
                        views: 234,
                        fileName: 'exam_schedule.pdf'
                      },
                      {
                        id: 2,
                        title: 'New Library Hours',
                        category: 'Administrative',
                        priority: 'Normal',
                        date: '2024-01-15',
                        uploadedBy: 'Admin Office',
                        target: 'All Students',
                        views: 156,
                        fileName: 'library_hours.pdf'
                      },
                      {
                        id: 3,
                        title: 'Tech Fest Registration Open',
                        category: 'Events',
                        priority: 'High',
                        date: '2024-01-14',
                        uploadedBy: 'Event Committee',
                        target: 'All Students',
                        views: 423,
                        fileName: 'techfest_registration.pdf'
                      },
                      {
                        id: 4,
                        title: 'Assignment Submission Guidelines',
                        category: 'Academic',
                        priority: 'Normal',
                        date: '2024-01-13',
                        uploadedBy: 'Academic Office',
                        target: 'All Students',
                        views: 189,
                        fileName: 'assignment_guidelines.pdf'
                      }
                    ].map((circular) => (
                      <div key={circular.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <File className="h-5 w-5 text-primary" />
                              <div className="flex-1">
                                <h3 className="font-medium">{circular.title}</h3>
                                <div className="flex items-center space-x-4 mt-1">
                                  <Badge 
                                    variant={circular.priority === 'High' ? 'destructive' : circular.priority === 'Urgent' ? 'destructive' : 'secondary'}
                                  >
                                    {circular.priority}
                                  </Badge>
                                  <Badge variant="outline">{circular.category}</Badge>
                                  <span className="text-sm text-muted-foreground flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {circular.date}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="ml-8">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>By: {circular.uploadedBy}</span>
                                <span>Target: {circular.target}</span>
                                <span className="flex items-center">
                                  <Eye className="h-3 w-3 mr-1" />
                                  {circular.views} views
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline">Load More Circulars</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Activity Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Top Performing Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Alex Johnson', score: 2340, rank: 1 },
                      { name: 'Sarah Chen', score: 1890, rank: 2 },
                      { name: 'Mike Wilson', score: 1560, rank: 3 },
                      { name: 'Emily Davis', score: 1450, rank: 4 },
                      { name: 'John Smith', score: 1320, rank: 5 }
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">
                            {student.rank}
                          </div>
                          <span className="font-medium">{student.name}</span>
                        </div>
                        <span className="text-primary font-bold">{student.score} XP</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Award XP Points</CardTitle>
                <CardDescription>Manually award points for exceptional activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium">Student</label>
                      <input 
                        placeholder="Search student..."
                        className="w-full p-2 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">XP Points</label>
                      <input 
                        type="number"
                        placeholder="Enter points..."
                        className="w-full p-2 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Category</label>
                      <select className="w-full p-2 border rounded-md mt-1">
                        <option>Technical Excellence</option>
                        <option>Leadership</option>
                        <option>Innovation</option>
                        <option>Social Impact</option>
                        <option>Academic Achievement</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Reason</label>
                    <textarea 
                      placeholder="Describe the reason for awarding points..."
                      className="w-full p-2 border rounded-md mt-1 h-20"
                    />
                  </div>
                  <Button variant="hero" className="w-full">
                    <Award className="h-4 w-4 mr-2" />
                    Award Points
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};