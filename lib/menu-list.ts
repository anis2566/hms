import {
  Users,
  Settings,
  LayoutGrid,
  FileSignature,
  LucideIcon,
  Pen,
  List,
  Radio,
  CircleCheck,
  BadgeX,
  BadgePercent,
  CircleDollarSign,
  Layers3,
  Medal,
  RefreshCcwDot,
  Ban,
  File,
  CalendarDays,
  Calendar,
  UserCog,
  GitCompareArrows,
  SquareStack,
  MicVocal,
  GalleryVertical,
  MessageSquare,
  Bell,
  Compass,
  BookOpenCheck,
  BookOpen,
  Headset,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname === "/dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Main",
      menus: [
        {
          href: "",
          label: "Category",
          active: pathname.includes("/admin/category"),
          icon: Layers3,
          submenus: [
            {
              href: "/admin/category/create",
              label: "Create",
              active: pathname === "/admin/category/create",
              icon: Pen,
            },
            {
              href: "/admin/category",
              label: "List",
              active: pathname === "/admin/category",
              icon: List,
            },
          ],
        },
        {
          href: "",
          label: "Course",
          active: pathname.includes("/admin/course"),
          icon: BookOpen,
          submenus: [
            {
              href: "/admin/course/create",
              label: "Create",
              active: pathname === "/admin/course/create",
              icon: Pen,
            },
            {
              href: "/admin/course",
              label: "List",
              active: pathname === "/admin/course",
              icon: List,
            },
          ],
        },
      ],
    },
  ];
}
