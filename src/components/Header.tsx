
import { Link } from "react-router-dom";
import { LoginDialog } from "./LoginDialog";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gradient">
          canz
        </Link>
        <LoginDialog />
      </div>
    </header>
  );
}
