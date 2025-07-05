"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="lg:w-[60vw] w-[70vw] lg:bg-white flex  flex-col lg:flex-row rounded-xl p-10  shadow-2xl items-center lg:gap-x-6 2xl:mt-20">
        <div id="intro" className="w-1/2 max-lg:hidden ">
          <p className=" text-5xl font-bold">Welcome!</p>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          </p>
        </div>
        <div id="card" className="max-lg:w-[90vw] w-1/2 shadow-md ">
          <Card className=" p-5">
            <CardHeader>
              <p className="text-3xl text-center    lg:text-4xl font-bold">
                Login
              </p>
            </CardHeader>
            <CardContent className="py-4">
              <p className="py-3 text-xl">Email</p>
              <Input
                className="p-5"
                type="email"
                placeholder="Masukkan Email"
              ></Input>
              <p className="py-3 text-xl">Password</p>
              <Input
                className="p-5"
                type="password"
                placeholder="Masukkan Password"
              ></Input>
              
              <p className="mt-5 text-md">Not Registered Yet? <button className="text-gray-400 hover:text-gray-600" onClick={()=>router.push('signup')} >{" "}Register</button> </p>
              
            </CardContent>
            <div className="flex gap-x-5 max-sm:justify-center">
              <Button
                className="w-fit px-8 py-5"
                type="button"
                onClick={() => router.push("/dashboard")}
              >
                Login
              </Button>
              <Button className=" bg-blue-500 w-fit px-8 py-5" type="button" onClick={()=>router.push('/')}>
                <Home></Home>
                <p>Back to Homepage</p>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
