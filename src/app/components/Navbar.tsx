import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Headset } from "lucide-react";
import DropDownMenuNavbar from "./DropDownMenuNavbar";
import DropDownProfile from "./DropDownProfile";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between 2xl:p-10  w-full px-4 py-2 absolute z-30 max-md:bg-white/95 max-md:shadow-lg">
        <div className="">
          <Image
            src="/croplogo.png"
            width={200}
            height={100}
            alt="logo"
            className="w-15 md:filter md:brightness-0 md:invert md:w-25 2xl:w-25 "
          ></Image>
        </div>
        <NavigationMenu
          viewport={false}
          className="max-md:hidden rounded-lg p-4 shadow-xl bg-white md:p-1 2xl:px-2 2xl:py-3"
        >
          <NavigationMenuList className="">
            <NavigationMenuItem>
              {/* Home Option */}
              <NavigationMenuTrigger className=" 2xl:text-xl font-light ">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="w-32 2xl:w-40">
                  <li className="">
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        About Us
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        Branch Office
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/dokumen" className="2xl:text-lg">
                        Documents
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Services Option */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="2xl:text-xl font-light">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-36 2xl:w-55">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        Live Tracking
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        Tariff Check
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* News */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="2xl:text-xl font-light">
                News
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-32 2xl:w-40 ">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        Article List
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        FAQ Section
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Join Us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="2xl:text-xl font-light">
                Join Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="" className="2xl:text-lg">
                        Career
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#" className="2xl:text-lg">
                        Partnership
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* BUTTON PROFILE AND CS - DESKTOP MODE */}
        <div className=" flex gap-x-3 max-sm:hidden">
          <DropDownProfile></DropDownProfile>
          <Button variant={"outline"} className=" rounded-full">
            <Headset size="icon"></Headset>
          </Button>
        </div>

        <div className="sm:hidden flex gap-x-3">
          {/* BUTTON CS - MOBILE */}
          <Button variant={"outline"} className=" rounded-full">
            <Headset size="icon"></Headset>
          </Button>
          {/* BUTTON MENU - MOBILE MODE */}
          <DropDownMenuNavbar></DropDownMenuNavbar>
        </div>
      </nav>
      {/* Drop Down Menu */}
    </>
  );
}

export default Navbar;
