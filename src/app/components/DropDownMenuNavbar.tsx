"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CircleChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function DropDownMenuNavbar() {
  const router = useRouter();
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} className="rounded-full">
            <CircleChevronDown
              size="sm"
              className="rounded-full"
            ></CircleChevronDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild onClick={()=>router.push("/")}>
            <p>Home</p>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Join Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">Order Now</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem asChild onClick={() => router.push("/login")}>
            <p>Login</p>
          </DropdownMenuItem>
          <DropdownMenuItem asChild onClick={()=>router.push('/signup')}>
            <p>Sign Up</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownMenuNavbar;
