import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LogIn, UserPlus } from "lucide-react";

interface LoginForm {
  email: string;
  password: string;
}

interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface AuthDialogProps {
  mode: 'login' | 'signup';
  trigger: React.ReactNode;
}

export function AuthDialog({ mode, trigger }: AuthDialogProps) {
  const [open, setOpen] = useState(false);
  const loginForm = useForm<LoginForm>();
  const signupForm = useForm<SignUpForm>();

  const onLoginSubmit = (data: LoginForm) => {
    console.log("Login attempt:", data);
    alert("Authentication requires backend integration. Please connect Supabase for full functionality.");
    setOpen(false);
  };

  const onSignUpSubmit = (data: SignUpForm) => {
    console.log("Sign up attempt:", data);
    if (data.password !== data.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert("Authentication requires backend integration. Please connect Supabase for full functionality.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-dark-purple">
            {mode === 'login' ? 'Login to' : 'Sign up to'} canz
          </DialogTitle>
          <DialogDescription>
            {mode === 'login' 
              ? 'Enter your email and password to access your account.'
              : 'Create a new account to get started with canz.'
            }
          </DialogDescription>
        </DialogHeader>
        
        {mode === 'login' ? (
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button 
                  type="button" 
                  variant="link" 
                  className="text-sm text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Button>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Login
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(onSignUpSubmit)} className="space-y-6">
              <FormField
                control={signupForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signupForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signupForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Create a password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signupForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Sign Up
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
