"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setUser } from "@/lib/redux/features/userSlice";

function DropDownProfile() {
  const fullname = useAppSelector((state) => state.user.fullname);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(setUser({ fullname: "" })); // reset ulang
    router.replace("/"); // kembali ke landing page
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="rounded-full xl:size-13 ">
          <CircleUser size="icon" className="xl:size-7 "></CircleUser>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* Dashboard Menu */}
        {fullname ? 
        <DropdownMenuItem asChild onClick={()=>{router.push('/dashboard')}}>
          <p>Dashboard</p>
        </DropdownMenuItem> : <div></div>}
        <DropdownMenuItem asChild onClick={() => router.push("/login")}>
          <p>Login</p>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={() => router.push("/signup")}>
          <p>Sign Up</p>
        </DropdownMenuItem>
        {fullname ? 
        <DropdownMenuItem asChild onClick={()=>{handleSignOut()}}>
          <p>Sign Out</p>
        </DropdownMenuItem> : <div></div>}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownProfile;
