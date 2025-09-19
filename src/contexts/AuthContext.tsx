import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole, AuthState } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const MOCK_USERS: Record<string, User> = {
  'student@edu.com': {
    id: '1',
    email: 'student@edu.com',
    name: 'Alex Johnson',
    role: 'student',
    department: 'Computer Science',
    rollNumber: 'CS2021001',
    avatar: '/placeholder.svg'
  },
  'staff@edu.com': {
    id: '2',
    email: 'staff@edu.com',
    name: 'Dr. Sarah Wilson',
    role: 'staff',
    department: 'Computer Science',
    employeeId: 'EMP001',
    avatar: '/placeholder.svg'
  },
  'mentor@edu.com': { // <-- This is the new entry
    id: '4',
    email: 'mentor@edu.com',
    name: 'Jane Smith',
    role: 'mentor',
    department: 'Career Services',
    employeeId: 'MEN001',
    avatar: '/placeholder.svg'
  },
  'admin@edu.com': {
    id: '3',
    email: 'admin@edu.com',
    name: 'Michael Chen',
    role: 'admin',
    department: 'Administration',
    employeeId: 'ADM001',
    avatar: '/placeholder.svg'
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    const mockUser = MOCK_USERS[email];
    
    if (mockUser && mockUser.role === role && password === 'password123') {
      setUser(mockUser);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};