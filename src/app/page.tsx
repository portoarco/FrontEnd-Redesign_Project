import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { CircleDollarSign, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <header className="relative">
        <div className=" w-[98vw] h-[98vh] md:h-[80vh]">
          <Image
            src="/mainbanner.jpg"
            // width={100}
            // height={100}
            fill
            alt="mainbanner"
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
          ></Image>

          {/* Mobile Version Additional */}
          <div className="absolute inset-0 top-30 2xl:top-40  flex justify-center mx-5 items-center z-10  flex-col 2">
            <div className="">
              <Image
                src="/croplogo.png"
                width={200}
                height={100}
                alt="logo"
                className="filter brightness-0 invert w-50  fade-in-fwd 2xl:w-70 "
              ></Image>
            </div>
            <p className="text-2xl 2xl:text-960 text-shadow-lg/20 text-white font-bold text-center mt-5 ">
              {" "}
              Pengiriman Cepat, Tepat, dan Hemat{" "}
            </p>
            <div className="border border-white p-3 rounded-xl mt-5">
              <Link href="#" className="text-white font-medium text-1">
                Get to Know
              </Link>
            </div>

            <section id="cek-resi" className="mt-15">
              <Card className="w-70 px-3 py-3 md:w-80">
                {/* Cek Resi */}
                <CardHeader>
                  <div className="flex gap-x-2 justify-center items-center">
                    <MapPinned></MapPinned>
                    <p className="text-sm md:text-xl">Lacak Resi</p>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <Input
                    placeholder="Masukkan Nomor Resi Anda"
                    className=" text-xs text-centers mt-3"
                  ></Input>

                  <div
                    id="btnCheck"
                    className="flex justify-center gap-x-3 mt-4"
                  >
                    <Button id="" className="bg-[#ff8e04] text-shadow-md">
                      <Link href="#">Cek Resi </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </header>

      <section id="container-content" className="px-5 py-6 md:px-20">
        <div id="carousel" className=" h-300  ">
          <p className=" mt-5 text-3xl md:text-5xl font-extrabold text-center text-[#202a44] text-shadow-xs">
            Our {""} <span className="text-[#ffa704]">Clients</span>
          </p>
          <div className="flex justify-center items-center mt-10">
            <Carousel
              opts={{
                align: "start",
              }}
              className=" max-w-[60vw] md:min-w-[80vw] mx-auto "
            >
              <CarouselContent className="items-center">
                <CarouselItem className=" md:basis-1/3  ">
                  <Card className="w-full flex justify-center  lg:h-[250px]">
                    <CardContent className="p-10">
                      <Image
                        src="/client1.svg"
                        width={100}
                        height={50}
                        className="w-full"
                        alt="client"
                      ></Image>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card className="w-full flex justify-center lg:h-[250px]">
                    <CardContent className="p-10">
                      <Image
                        src="/client2.svg"
                        width={100}
                        height={50}
                        className="w-full"
                        alt="client"
                      ></Image>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card className="w-full flex justify-center lg:h-[250px]">
                    <CardContent className="p-10">
                      <Image
                        src="/client4.svg"
                        width={100}
                        height={50}
                        className="w-full"
                        alt="client"
                      ></Image>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <Card className="w-full flex justify-center lg:h-[250px]">
                    <CardContent className="p-10">
                      <Image
                        src="/client5.svg"
                        width={100}
                        height={50}
                        className="w-full"
                        alt="client"
                      ></Image>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div id="about-us">
          <p className=" mt-5 text-3xl md:text-5xl font-extrabold text-center text-[#202a44] text-shadow-xs">
            Our {""} <span className="text-[#ffa704]">Clients</span>
          </p>
        </div>
      </section>
    </>
  );
}
