"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast, Bounce } from "react-toastify";
import { apiCall } from "@/helper/apiCall";

function SignUpPage() {
  const router = useRouter();

  // const fullname = useAppSelector((state) => state.user.fullname);
  // const email = useAppSelector((state) => state.user.email);
  // const password = useAppSelector((state) => state.user.password);

  // useState dan useRef
  const inFullnameRef = useRef<HTMLInputElement>(null);
  const inEmailRef = useRef<HTMLInputElement>(null);
  const inPasswordRef = useRef<HTMLInputElement>(null);
  const inConfirmPasswordRef = useRef<HTMLInputElement>(null);

  // register dan integrasi ke backendless button
  async function btnSignUp() {
    const fullname = inFullnameRef.current?.value || "";
    const email = inEmailRef.current?.value || "";
    const password = inPasswordRef.current?.value || "";
    const confirmPassword = inConfirmPasswordRef.current?.value || "";

    try {
      if (!fullname || !email || !password || !confirmPassword) {
        toast.warn("Data tidak boleh kosong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return;
      }

      if (password !== confirmPassword) {
        toast.warn("Konfirmasi Password Tidak Sesuai!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return;
      }

      function checkEmail(email: string) {
        const regex = new RegExp(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );

        return regex.test(email);
      }

      if (!checkEmail(email)) {
        toast.error("Format Email Tidak Sesuai", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        return;
      }

      // send data to backendless

      const response = await apiCall.post("/accounts", {
        fullname,
        email,
        password,
      });

      // Success Alert
      toast.success("Data Berhasil Tersimpan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      // move to login
      router.push("/login");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong! Check Console");
    }
  }

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
              <p className="text-3xl text-center    lg:text-4xl font-bold">
                Sign Up
              </p>
            </CardHeader>
            <CardContent className="py-4">
              <p className="py-3 text-xl">Fullname</p>
              <Input
                className="p-5"
                type="text"
                placeholder="Masukkan Nama Lengkap"
                ref={inFullnameRef}
              ></Input>
              <p className="py-3 text-xl">Email</p>
              <Input
                className="p-5"
                type="email"
                placeholder="Masukkan Email"
                ref={inEmailRef}
              ></Input>
              <p className="py-3 text-xl">Password</p>
              <Input
                className="p-5"
                type="password"
                placeholder="Masukkan Password"
                ref={inPasswordRef}
              ></Input>
              <p className="py-3 text-xl">Confirmation Password</p>
              <Input
                className="p-5"
                type="password"
                placeholder="Tulis Ulang Password"
                ref={inConfirmPasswordRef}
              ></Input>
            </CardContent>
            <div className="flex gap-x-5 max-sm:justify-center">
              <Button className="w-fit " onClick={btnSignUp}>
                Register
              </Button>
              <Button
                className="w-fit"
                type="button"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default SignUpPage;
