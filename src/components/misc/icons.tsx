import { cn } from "@/lib/utils";

import {
  Activity,
  ArrowRight,
  Check,
  ChevronDown,
  CircuitBoardIcon,
  DollarSign,
  Eye,
  Facebook,
  LayoutDashboardIcon,
  LogIn,
  LogOut,
  LucideIcon,
  LucideProps,
  Megaphone,
  Moon,
  PanelTop,
  Settings,
  ShoppingCart,
  Star,
  Twitter,
  User,
  User2Icon,
  Users,
  UserX2Icon,
} from "lucide-react";

export type Icon = LucideIcon;
export const Icons = {
  moon: Moon,
  twitter: Twitter,
  check: Check,
  arrowRight: ArrowRight,
  dashboard: LayoutDashboardIcon,
  vendors: User,
  employee: UserX2Icon,
  profile: User2Icon,
  kanban: CircuitBoardIcon,
  dollar: DollarSign,
  user: User,
  users: Users,
  activity: Activity,
  panelTop: PanelTop,
  login: LogIn,
  logout: LogOut,
  megaphone: Megaphone,
  chevronDown: ChevronDown,
  settings: Settings,
  cart: ShoppingCart,
  star: Star,
  eye: Eye,

  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  ),
  eyeClosed: ({ ...props }: LucideProps) => (
    <svg
      // fill="none"
      viewBox="0 0 20 10"
      stroke="none"
      // fill="#000"
      fill-opacity=".54"
      {...props}
    >
      <path d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"></path>
    </svg>
  ),
  google: (className?: unknown) => (
    <span className={`w-8 h-8 inline-block google ${className}`} />
  ),
  facebook: (className?: unknown) => (
    <span className={`w-8 h-8 inline-block facebook-blue ${className}`} />
  ),
};
