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
          <div className="absolute inset-0 top-[10] 2xl:top-[100]   flex justify-center mx-5 items-center z-10  flex-col 2">
            <div className="">
              <Image
                src="/croplogo.png"
                width={200}
                height={100}
                alt="logo"
                className="filter brightness-0 invert w-50  fade-in-fwd 2xl:w-90 "
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

            <section
              id="cek-resi"
              className="mt-15 md:absolute md:right-2 md:bottom-3"
            >
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
                    className=" text-xs text-center mt-3"
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

      <section
        id=" container-content"
        className=" px-5 py-6 md:px-20"
      >
        <div
          id="about-us"
          className="my-10 flex flex-col gap-x-10  relative items-center"
        >
          <div
            id="compro-banner"
            className="shadow-xl rounded-lg overflow-hidden"
          >
            <Image
              src="/compro-banner.jpeg"
              width={400}
              height={50}
              alt="comp"
              className="object-contain xl:w-[1/2vw]"
            ></Image>
          </div>
          <div id="brief-intro" className="">
            <p className="text-3xl xl:text-4xl font-extrabold text-[#ffa704] text-center mt-15 mb-5 text-shadow-xs">
              About<span className=" text-[#202a44]"> Us</span>
            </p>
            <p className="text-justify xl:text-xl md:text-center lg:text-xl">
              PT Royal Express Indonesia {"(REX)"} focuses on providing reliable
              document and parcel delivery services via air, sea, and land
              transportation, catering to both domestic and international
              destinations.
            </p>
            <p className="text-justify xl:text-xl mt-4 md:text-center lg:text-xl">
              REX prioritizes customer satisfaction by consistently striving to
              meet all customer needs with excellence. REX is supported by a
              team of skilled professionals and a well-equipped fleet, ensuring
              the highest standards of service and reliability.
            </p>
          </div>
        </div>

        <div id="clients-carousel" className="2xl:mt-20 ">
          <p className=" mt-5 text-3xl md:text-4xl font-extrabold text-center text-[#202a44] text-shadow-xs">
            Our {""} <span className="text-[#ffa704]">Business Partner</span>
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

        <div id="achievements" className="md:mt-30 mt-10">
          <p className="text-3xl xl:text-4xl  font-extrabold text-[#ffa704] text-center my-8 xl:my-15 text-shadow-xs">
            Our<span className=" text-[#202a44]"> Achievement</span>
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 align-middle ">
            <div
              id="achievement1"
              className="rounded-xl bg-gradient-to-br from-orange-300 to-orange-500  shadow-xl text-center p-2 md:p-4"
            >
              <p className="text-2xl font-bold text-white text-shadow-md my-4">
                50+ Branch Offices
              </p>
              <p className="text-white">
                Offices across Indonesia, expanding access
              </p>
            </div>
            <div
              id="achievement2"
              className="rounded-xl bg-gradient-to-br from-orange-300 to-orange-500 shadow-xl text-center p-2 md:p-4"
            >
              <p className="text-2xl font-bold text-white text-shadow-md my-4">
                100+ Cash Counters
              </p>
              <p className="text-white">
                Counters nationwide for fast transactions
              </p>
            </div>
            <div
              id="achievement3"
              className="rounded-xl bg-gradient-to-br from-orange-300 to-orange-500 shadow-xl text-center p-2 md:p-4"
            >
              <p className="text-2xl font-bold text-white text-shadow-md my-4">
                500+ Fleet Units
              </p>
              <p className="text-white">
                A fleet of vehicles ensuring quick deliveries
              </p>
            </div>
          </div>
        </div>

        <div id="leader-list">
          <p className="text-3xl xl:text-4xl  font-extrabold text-[#ffa704] text-center my-8 xl:mt-25 text-shadow-xs">
            Our<span className=" text-[#202a44]"> Leaders</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-5 md:gap-6 xl:gap-8 max-w-6xl mx-auto  place-items-center">
            <div
              id="founder1"
              className="p-5 w-full max-w-xs  items-center text-center shadow-2xl rounded-xl bg-white "
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/founder1.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  alt="founder1"
                  className=" object-cover"
                  quality={90}
                ></Image>
              </div>
              <p className="font-bold text-xl mt-5 ">Frans Limasnax</p>
              <p className="text-md">President Commisioner</p>
            </div>

            {/* Founder 2 */}
            <div
              id="founder2"
              className="p-5 w-full max-w-xs  items-center text-center shadow-2xl rounded-xl bg-white "
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/founder2.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  alt="founder1"
                  className=" object-cover"
                  quality={90}
                ></Image>
              </div>
              <p className="font-bold text-xl mt-5 ">Rudy Halimihardja</p>
              <p className="text-md">Commisioner</p>
            </div>

            {/* Founder 3 */}

            <div
              id="founder3"
              className="p-5 w-full max-w-xs  items-center text-center shadow-2xl rounded-xl bg-white "
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/founder3.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  alt="founder1"
                  className=" object-cover"
                  quality={90}
                ></Image>
              </div>
              <p className="font-bold text-xl mt-5 ">Arnold Limasnax</p>
              <p className="text-md">President Director</p>
            </div>

            {/* Founder 4 */}

            <div
              id="founder4"
              className="p-5 w-full max-w-xs  items-center text-center shadow-2xl rounded-xl bg-white "
            >
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl">
                <Image
                  src="/founder4.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  alt="founder1"
                  className=" object-cover"
                  quality={90}
                ></Image>
              </div>
              <p className="font-bold text-xl mt-5 ">Sahdan Panjaitan</p>
              <p className="text-md">Director</p>
            </div>
          </div>
        </div>

        <div id="our-services" className="mt-20 px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Main content container */}
            <div className="bg-gradient-to-bl from-orange-500 to-orange-400 w-full rounded-xl relative z-10 p-8">
              {/* Content area - you can put anything here */}
              <div className="pr-0 md:pr-96">
                {" "}
                {/* Right padding to avoid teal overlap on larger screens */}
                <h2 className="text-white text-4xl font-bold mb-6">
                  Our Services
                </h2>
                {/* Your custom content goes here */}
                <div className="space-y-6 text-white">
                  {/* Rex-0 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">Rex-0</p>
                      <p className="text-sm text-center">
                        Pasti sampai dalam 1 hari!
                      </p>
                    </div>
                    {/* Rex-1 */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">Rex-1</p>

                      <p className="text-sm text-center">
                        Pengiriman cepat 1 hari, garansi uang kembali
                      </p>
                    </div>
                    {/*Express */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">Express Service</p>

                      <p className="text-sm text-center">
                        Pengiriman instan dan mendesak
                      </p>
                    </div>
                    {/* Regular Service */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">Regular Service</p>

                      <p className="text-sm text-center">
                        Pengiriman ekonomis, tetap On Time!
                      </p>
                    </div>
                    {/* International Service */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">
                        International Service
                      </p>

                      <p className="text-sm text-center">
                        Solusi pengiriman global
                      </p>
                    </div>
                    {/* Other Service */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold mb-2 text-2xl text-center">Other Service</p>

                      <p className="text-sm text-center">
                        Pengiriman kebutuhan khusus, sesuai permintaan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="article-list">
          <p>Latest Articles</p>\
          {/* cek dari websitenya maersk buat yang latest post model grid */}
        </div>
        <div id="work-culture">
          <p>Work at Rex</p>
        </div>
        <div id="faq-list"></div>
      </section>
    </>
  );
}
