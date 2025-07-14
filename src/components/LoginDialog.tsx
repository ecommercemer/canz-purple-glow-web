
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
import { LogIn } from "lucide-react";

interface LoginForm {
  email: string;
  password: string;
}

export function LoginDialog() {
  const [open, setOpen] = useState(false);
  const form = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log("Login attempt:", data);
    // For now, just redirect to a dashboard route
    // In a real app, this would authenticate with a backend
    alert("Login functionality requires backend integration. Please connect Supabase for full authentication.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-2 border-primary hover:bg-gradient-secondary transition-all duration-300">
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">Login to canz</DialogTitle>
          <DialogDescription className="text-readable">
            Enter your email and password to access your account.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-readable-secondary">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-readable-secondary">Password</FormLabel>
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
              className="w-full bg-gradient-canz hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
