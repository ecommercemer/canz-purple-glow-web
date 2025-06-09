
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Home,
  Users,
  Zap,
  Smartphone,
  DollarSign,
  TrendingUp,
  Megaphone,
  Phone,
  BookOpen,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About Us",
    url: "/about",
    icon: Users,
  },
  {
    title: "Services",
    icon: Sparkles,
    submenu: [
      {
        title: "Adtech",
        url: "/services/adtech",
        icon: Zap,
        description: "IOT, AR/VR advertising & smart digital signage",
      },
      {
        title: "Digital Product Development",
        url: "/services/digital-development",
        icon: Smartphone,
        description: "AI automations, web & app development",
      },
      {
        title: "Fintech",
        url: "/services/fintech",
        icon: DollarSign,
        description: "Forex, crypto trading tools & Web3 technologies",
      },
      {
        title: "Investment",
        url: "/services/investment",
        icon: TrendingUp,
        description: "Angel investment & venture capital",
      },
      {
        title: "Marketing & Content Studio",
        url: "/services/marketing",
        icon: Megaphone,
        description: "Motion graphics, SEO & digital marketing",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Phone,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-border/50 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="border-b border-border/50 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-canz rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gradient">canz</h2>
            <p className="text-xs text-muted-foreground">Innovation Hub</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-muted-foreground mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <Collapsible
                      open={openItems.includes(item.title)}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className="w-full justify-between hover:bg-gradient-secondary transition-all duration-200"
                        >
                          <div className="flex items-center">
                            <item.icon className="w-5 h-5 mr-3" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openItems.includes(item.title) ? 'rotate-90' : ''
                            }`} 
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2">
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  to={subItem.url}
                                  className={`flex items-start p-3 rounded-lg transition-all duration-200 hover:bg-gradient-secondary ${
                                    location.pathname === subItem.url
                                      ? 'bg-gradient-secondary border-l-4 border-primary'
                                      : ''
                                  }`}
                                >
                                  <subItem.icon className="w-4 h-4 mr-3 mt-0.5 text-primary" />
                                  <div>
                                    <div className="font-medium text-sm">{subItem.title}</div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className={`flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gradient-secondary ${
                          location.pathname === item.url
                            ? 'bg-gradient-secondary border-l-4 border-primary'
                            : ''
                        }`}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-border/50 p-4">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">© 2024 canz</p>
          <p className="text-xs text-muted-foreground">Innovation & Technology</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
