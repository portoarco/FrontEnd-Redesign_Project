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
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setUser } from "@/lib/redux/features/userSlice";

function DropDownMenuNavbar() {
  const router = useRouter();

  const fullname = useAppSelector((state) => state.user.fullname);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    dispatch(setUser({ fullname: "" })); // reset ulang
    router.push("/"); // kembali ke landing page
  };

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
          <DropdownMenuItem asChild onClick={() => router.push("/")}>
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
          {fullname ? (
            <DropdownMenuItem
              asChild
              onClick={() => {
                router.replace('/dashboard')
              }}
            >
              <p>Dashboard</p>
            </DropdownMenuItem>
          ) : (
            <div></div>
          )}
          <DropdownMenuItem asChild onClick={() => router.push("/login")}>
            <p>Login</p>
          </DropdownMenuItem>
          <DropdownMenuItem asChild onClick={() => router.push("/signup")}>
            <p>Sign Up</p>
          </DropdownMenuItem>
          {/* Sign Out Button Appears when Login */}
          {fullname ? (
            <DropdownMenuItem
              asChild
              onClick={() => {
                handleSignOut();
              }}
            >
              <p>Sign Out</p>
            </DropdownMenuItem>
          ) : (
            <div></div>
          )}

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownMenuNavbar;
