"use client";
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
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setUser } from "@/lib/redux/features/userSlice";
import { useEffect } from "react";
import { apiCall } from "@/helper/apiCall";

function Navbar() {
  const router = useRouter();
  const fullname = useAppSelector((state) => state.user.fullname);
  const dispatch = useAppDispatch();

  // keep login
  const keepLogin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await apiCall.get(`/accounts/${token}`);

        dispatch(setUser(res.data));
      }
    } catch (error) {
      console.log(error);
      alert("There is something wrong, check console!");
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between 2xl:p-10  w-full px-4 py-2 absolute z-30 max-md:bg-white/95 max-md:shadow-lg max-md:absolute">
        <div className="">
          <Image
            src="/croplogo.png"
            width={200}
            height={100}
            alt="logo"
            quality={100}
            className="cursor-pointer w-15 md:filter md:brightness-0 md:invert md:w-25 2xl:w-25 "
            onClick={() => router.push("/")}
          ></Image>
        </div>
        <NavigationMenu
          viewport={false}
          className="max-md:hidden rounded-lg p-4 shadow-xl bg-white md:p-1  2xl:py-3"
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
                      <Link href="#about-us" className="2xl:text-lg">
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
                      <Link href="/" className="2xl:text-lg">
                        Article List
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#faq-list" className="2xl:text-lg">
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
        <div className=" flex gap-x-3 max-sm:hidden items-center">
          {fullname ? (
            <p className="text-white text-lg md:hidden lg:block">
              Hello, <span className="font-bold">{fullname}</span> !
            </p>
          ) : (
            <div></div>
          )}

          <DropDownProfile></DropDownProfile>
          <Button variant={"outline"} className=" rounded-full xl:size-13">
            <a href="tel:+622156958333 ">
              <Headset className="xl:size-7"></Headset>
            </a>
          </Button>
        </div>

        <div className="sm:hidden flex gap-x-3">
          {/* BUTTON CS - MOBILE */}
          <Button variant={"outline"} className=" rounded-full">
            <a href="tel:+622156958333 ">
              <Headset className="xl:size-7"></Headset>
            </a>
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
