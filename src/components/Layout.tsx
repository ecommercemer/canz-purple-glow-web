
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-hero">
        <AppSidebar />
        <main className="flex-1">
          <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-border/50 p-4">
            <SidebarTrigger className="hover:bg-gradient-secondary transition-colors duration-200" />
          </div>
          <div className="flex-1">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
