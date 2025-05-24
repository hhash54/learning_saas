import { useClerk, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

const AppSidebar = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <div>AppSidebar</div>
  );
};

export default AppSidebar;
