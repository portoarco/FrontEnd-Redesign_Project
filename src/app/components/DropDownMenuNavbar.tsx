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

function DropDownMenuNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"outline"} className="rounded-full">
          <CircleChevronDown size="sm" className="rounded-full"></CircleChevronDown>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="#">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#">Join Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#">Order Now</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem>
          <Link href="#">Login</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#">Sign Up</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownMenuNavbar;
