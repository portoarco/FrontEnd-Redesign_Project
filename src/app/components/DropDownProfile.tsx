"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";


function DropDownProfile() {

  const router = useRouter();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        <Button variant={"outline"} className="rounded-full xl:size-13 ">
          <CircleUser size="icon" className="xl:size-7 "></CircleUser>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild onClick={()=>router.push('/login')}  >
          <p>Login</p>
        </DropdownMenuItem>
        <DropdownMenuItem asChild onClick={()=>router.push('/signup')}>
          <p>Sign Up</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownProfile;
