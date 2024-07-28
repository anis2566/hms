import DashboardLayout from "@/components/dashboard/layout";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
      <DashboardLayout>{children}</DashboardLayout>
  )
}