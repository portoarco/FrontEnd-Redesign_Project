import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import Link from "next/link";

function DropDownProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"outline"} className="rounded-full">
          <CircleUser size="icon" className="2xl:w-xl "></CircleUser>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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

export default DropDownProfile;
