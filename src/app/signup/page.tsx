"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function SignUpPage() {
    const router = useRouter();


  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="lg:w-[60vw] w-[70vw] lg:bg-white flex  flex-col lg:flex-row rounded-xl p-10 shadow-2xl items-center lg:gap-x-4 2xl:mt-30">
        <div id="intro" className="w-1/2 max-lg:hidden ">
          <p className=" text-5xl font-bold">Welcome!</p>
          <p className="text-2xl mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            
          </p>
        </div>
        <div id="card" className="max-lg:w-[90vw] w-1/2 shadow-md ">
          <Card className=" p-5">
            <CardHeader>
              <p className="text-3xl text-center    lg:text-4xl font-bold">Sign Up</p>
            </CardHeader>
            <CardContent className="py-4">
              <p className="py-3 text-xl">Fullname</p>
              <Input className="p-5" type="text" placeholder="Masukkan Nama Lengkap"></Input>
              <p className="py-3 text-xl">Email</p>
              <Input className="p-5" type="email" placeholder="Masukkan Email"></Input>
              <p className="py-3 text-xl">Password</p>
              <Input className="p-5" type="password" placeholder="Masukkan Password"></Input>
              <p className="py-3 text-xl" >Confirmation Password</p>
              <Input className="p-5" type="password" placeholder="Tulis Ulang Password"></Input>
            </CardContent>
            <div className="flex gap-x-5 max-sm:justify-center">
              <Button className="w-fit ">Register</Button>
              <Button className="w-fit" type="button" onClick={()=>router.push('/login')}>Login</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
