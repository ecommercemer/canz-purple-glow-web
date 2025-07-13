
import { Link } from "react-router-dom";
import { AuthDialog } from "./AuthDialog";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient">
          canz
        </Link>
        <div className="flex items-center gap-4">
          <AuthDialog
            mode="signup"
            trigger={
              <Button variant="outline" className="border-2 border-primary hover:bg-gradient-secondary transition-all duration-300">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            }
          />
          <AuthDialog
            mode="login"
            trigger={
              <Button className="bg-gradient-canz hover:shadow-2xl hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
}
