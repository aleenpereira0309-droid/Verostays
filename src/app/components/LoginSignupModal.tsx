import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Mail, Lock, User, Phone } from 'lucide-react';

interface LoginSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginSignupModal({ isOpen, onClose }: LoginSignupModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log(isLogin ? 'Login' : 'Signup', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center" style={{ color: '#222222' }}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!isLogin && (
            <div className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 outline-none text-sm"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required={!isLogin}
              />
            </div>
          )}

          <div className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 outline-none text-sm"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {!isLogin && (
            <div className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg">
              <Phone className="w-5 h-5 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 outline-none text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required={!isLogin}
              />
            </div>
          )}

          <div className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="flex-1 outline-none text-sm"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#08CB00' }}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm hover:underline"
              style={{ color: '#08CB00' }}
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}