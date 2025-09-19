import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users,
  BarChart3,
  TrendingUp,
  Award,
  FileText,
  Settings,
  Database,
  Shield,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
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
      <header className="bg-gradient-primary text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard - {user.name}</h1>
              <p className="text-primary-light">Employee ID: {user.employeeId} | System Administrator</p>
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
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-primary">1,247</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Faculty Members</p>
                  <p className="text-2xl font-bold text-secondary">84</p>
                </div>
                <Shield className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Activities</p>
                  <p className="text-2xl font-bold text-success">356</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">System Health</p>
                  <p className="text-2xl font-bold text-info">99.8%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Institution Overview</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Student Participation Rate</span>
                      <span className="font-bold text-primary">87%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Average Activities per Student</span>
                      <span className="font-bold text-primary">12.3</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Faculty Approval Rate</span>
                      <span className="font-bold text-primary">94%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Portfolio Completion Rate</span>
                      <span className="font-bold text-primary">76%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system activities and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { action: 'New student registration', user: '15 students', time: '2 hours ago' },
                      { action: 'Bulk activity approval', user: 'Dr. Sarah Wilson', time: '4 hours ago' },
                      { action: 'System backup completed', user: 'System', time: '6 hours ago' },
                      { action: 'Portfolio exports generated', user: '23 students', time: '8 hours ago' },
                      { action: 'NAAC report generated', user: 'Admin Team', time: '1 day ago' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium text-sm">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.user}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Participation Trends</CardTitle>
                  <CardDescription>Student activity participation over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                    <div className="ml-4 text-muted-foreground">
                      <p>Interactive Charts</p>
                      <p className="text-sm">Analytics visualization would be here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Department Performance</CardTitle>
                  <CardDescription>Activity engagement by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { dept: 'Computer Science', students: 342, activities: 1456, avg: 4.26 },
                      { dept: 'Mechanical Engineering', students: 298, activities: 1203, avg: 4.04 },
                      { dept: 'Electronics & Communication', students: 276, activities: 1098, avg: 3.98 },
                      { dept: 'Civil Engineering', students: 251, activities: 967, avg: 3.85 },
                      { dept: 'Information Technology', students: 180, activities: 798, avg: 4.43 }
                    ].map((dept, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">{dept.dept}</p>
                          <p className="text-sm text-muted-foreground">{dept.students} students</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary">{dept.activities}</p>
                          <p className="text-xs text-muted-foreground">Avg: {dept.avg}/student</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Generate Reports</CardTitle>
                <CardDescription>Export institutional reports for various purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Compliance Reports</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        NAAC Self-Study Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        NIRF Data Collection
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        AICTE Annual Report
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Analytics Reports</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Student Activity Summary
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Department Performance
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Placement Readiness Report
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-medium mb-2">Custom Report Builder</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create custom reports with specific criteria and date ranges
                  </p>
                  <Button variant="hero">
                    <Settings className="h-4 w-4 mr-2" />
                    Open Report Builder
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>User Statistics</CardTitle>
                  <CardDescription>System-wide user activity and engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Active Students</span>
                      <span className="font-bold text-primary">1,189 / 1,247</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Active Faculty</span>
                      <span className="font-bold text-secondary">78 / 84</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>Daily Active Users</span>
                      <span className="font-bold text-success">892</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
                      <span>New Registrations (30d)</span>
                      <span className="font-bold text-info">127</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>System Management</CardTitle>
                  <CardDescription>User roles and system administration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Manage User Roles
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Permission Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Database className="h-4 w-4 mr-2" />
                      Bulk User Import
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      User Activity Logs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>System Configuration</CardTitle>
                  <CardDescription>Core system settings and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Institution Name</label>
                      <input 
                        defaultValue="Global Institute of Technology"
                        className="w-full p-2 border rounded-md mt-1"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Academic Year</label>
                      <select className="w-full p-2 border rounded-md mt-1">
                        <option>2024-2025</option>
                        <option>2023-2024</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Default XP Values</label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <input placeholder="Technical" className="p-2 border rounded-md" />
                        <input placeholder="Social" className="p-2 border rounded-md" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Integration Settings</CardTitle>
                  <CardDescription>External system connections and APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">LMS Integration</p>
                        <p className="text-sm text-muted-foreground">Connected to Moodle</p>
                      </div>
                      <Button variant="success" size="sm">Connected</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">ERP System</p>
                        <p className="text-sm text-muted-foreground">Student information sync</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div>
                        <p className="font-medium">AI Services</p>
                        <p className="text-sm text-muted-foreground">Portfolio insights enabled</p>
                      </div>
                      <Button variant="success" size="sm">Active</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};