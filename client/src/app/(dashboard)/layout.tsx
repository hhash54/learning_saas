import Loading from "a/components/Loading";
import Navbar from "a/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  // handle use effect isCoursePage

  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please sign in to access this page.</div>;

  return (
    <div className="nondashboard-layout">
      <main className="nondashboard-layout__main">
        {children}
      </main>
    </div>
  );
}
