"use client";
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
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <header>
        <div className="relative z-10 top-40 xl:top-60" >
          {/* Mobile Version Additional */}
          <div className="inset-0 flex justify-center mx-10 items-center flex-col">
            <div className="">
              <Image
                src="/white-logo.png"
                width={200}
                height={100}
                alt="logo"
                className="filter  fade-in-fwd lg:w-100  "
                // className="filter brightness-0 invert w-50  fade-in-fwd 2xl:w-90 "
              ></Image>
            </div>

            <p className="text-2xl lg:text-4xl text-shadow-lg/20 text-white font-bold text-center mt-5 ">
              {" "}
              Solusi Tepat Pengiriman Cepat dan Hemat{" "}
            </p>
            <div className="border-3 border-white p-3 rounded-xl mt-7 bg-white/20">
              <Link href="#about-us" className="text-white font-medium text-1 lg:text-xl">
                Get to Know
              </Link>
            </div>
            <section
              id="cek-resi"
              className="mt-10"
            >
              <Card className=" w-70 px-3 py-3 md:w-80">
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

      <section id=" container-content" className=" px-5 py-6 max-sm:mt-[100%] md:mt-[30%] xl:mt-[40%] 2xl:mt-[20%]">
        <div
          id="about-us"
          className="my-10 flex flex-col xl:flex-row gap-x-10  relative items-center md:px-15 md:align-middle"
        >
          <div
            id="compro-banner"
            className="shadow-xl rounded-lg overflow-hidden "
          >
            <Image
              src="/compro-banner.jpeg"
              width={400}
              height={50}
              alt="comp"
              className="object-cover xl:w-150"
            ></Image>
          </div>
          <div id="brief-intro" className="">
            <p className="xl:text-start text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
              About Us
            </p>
            <div className="">
              <p className="xl:text-left text-justify xl:text-xl md:text-center lg:text-xl">
                PT Royal Express Indonesia {"(REX)"} focuses on providing
                reliable document and parcel delivery services via air, sea, and
                land transportation, catering to both domestic and international
                destinations.
              </p>
              <p className="xl:text-left text-justify xl:text-xl mt-4 md:text-center lg:text-xl">
                REX prioritizes customer satisfaction by consistently striving
                to meet all customer needs with excellence. REX is supported by
                a team of skilled professionals and a well-equipped fleet,
                ensuring the highest standards of service and reliability.
              </p>
            </div>
          </div>
        </div>
        <div id="clients-carousel" className="lg:mt-40 ">
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
            Our Business Partner
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
        <div id="achievements" className="md:mt-40 mt-10">
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
            Our Achievement
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
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
            Our Leaders
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

        <div id="services">
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
            Our Service
          </p>

          <div className="container mx-auto px-4 py-8 ">
            <div
              id="Our Service"
              className="grid grid-cols-1 md:grid-cols-5 md:gap-y-20 items-stretch max-sm:border  max-sm:p-2 "
            >
              {/* Service Picture - Takes 2 columns out of 5 */}
              <div
                id="service-picture"
                className="md:col-span-2  overflow-hidden relative min-h-[200px] md:min-h-[250px] max-sm:hidden rounded-xl shadow-xl  "
              >
                <Image
                  src="/courier.jpg"
                  // ukuran 250 x 400 px
                  fill
                  alt="service"
                  className="object-cover"
                />
              </div>
              {/* Service Detail - Takes 3 columns out of 5 */}
              <div
                id="service-detail"
                className="md:col-span-3 border border-white p-6 flex flex-col justify-center min-h-[200px] md:min-h-[250px] max-sm:border-b-gray-400"
              >
                <p className="text-3xl font-semibold mb-4 max-sm:text-center md:text-4xl">
                  REX Services
                </p>
                <p className="text-md text-justify leading-relaxed mb-6 max-sm:text-center max-sm:text-sm ">
                  Nikmati keunggulan layanan eksklusif kami: REX 0 - pengiriman
                  super cepat dalam 1 hari; REX 1 - layanan semalam dengan
                  jaminan uang kembali; serta Other Services untuk solusi
                  fleksibel kebutuhan pengiriman khusus Anda. Semua dirancang
                  untuk memastikan paket Anda sampai tepat waktu, aman, dan
                  sesuai harapan.
                </p>
                <Button className="w-fit max-sm:mx-auto bg-black text-white hover:bg-gray-800">
                  Check Detail
                </Button>
              </div>

              {/* Service 2 */}

              {/* Service Detail - Takes 3 columns out of 5 */}
              <div
                id="service-detail"
                className="md:col-span-3 border-b border-white p-6 flex flex-col justify-center min-h-[200px] md:min-h-[250px] max-sm:border-b-gray-400 "
              >
                <p className="text-3xl font-semibold mb-4 text-end max-sm:text-center md:text-4xl">
                  Express and Regular
                </p>
                <p className="text-md text-right leading-relaxed mb-6 max-sm:text-center max-sm:text-sm ">
                  Kami mengerti setiap kiriman memiliki urgensinya sendiri.
                  Pilih Express Service untuk pengiriman kilat yang efisien dan
                  hemat waktu, atau Regular Service bagi Anda yang mengutamakan
                  biaya ekonomis tanpa mengorbankan ketepatan waktu dan kualitas
                  layanan. REX siap mendukung segala kebutuhan logistik Anda.
                </p>
                <Button className="w-fit max-sm:mx-auto bg-black text-white hover:bg-gray-800 ">
                  Check Detail
                </Button>
              </div>
              {/* Service Picture - Takes 2 columns out of 5 */}
              <div
                id="service-picture"
                className="md:col-span-2  overflow-hidden relative min-h-[200px] md:min-h-[250px] max-sm:hidden rounded-xl shadow-xl"
              >
                <Image
                  src="/express.jpg"
                  fill
                  alt="service"
                  className="object-cover"
                />
              </div>

              {/* Service 3 */}
              {/* Service Picture - Takes 2 columns out of 5 */}
              <div
                id="service-picture"
                className="md:col-span-2  overflow-hidden relative min-h-[200px] md:min-h-[250px] max-sm:hidden rounded-xl shadow-xl"
              >
                <Image
                  src="/international.jpg"
                  fill
                  alt="service"
                  className="object-cover"
                />
              </div>
              {/* Service Detail - Takes 3 columns out of 5 */}
              <div
                id="service-detail"
                className="md:col-span-3 border-b border-white p-6 flex flex-col justify-center min-h-[200px] md:min-h-[250px]"
              >
                <p className="text-3xl font-semibold mb-4 max-sm:text-center md:text-4xl">
                  National and International
                </p>
                <p className="text-md text-justify leading-relaxed mb-6 max-sm:text-center max-sm:text-sm">
                  REX hadir di seluruh penjuru Indonesia dan siap menjangkau
                  dunia. Dengan jaringan luas dan pengalaman terpercaya, kami
                  melayani pengiriman domestik dan internasional secara aman,
                  cepat, dan profesional. Dimanapun tujuan Anda, REX adalah
                  solusi logistik tanpa batas.
                </p>
                <Button className="w-fit max-sm:mx-auto bg-black text-white hover:bg-gray-800">
                  Check Detail
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="article-list"
          className="bg-gradient-to-bl from-red-600 to-amber-300 -mx-5 p-10"
        >
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-white text-center my-10 tracking-tight leading-snug drop-shadow-sm ">
            Latest Article
          </p>
          {/* cek dari websitenya maersk buat yang latest post model grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-5 p-5">
            <div
              id="article-1"
              className="bg-white grayscale-100 col-span-1 p-6 border-2 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-103 hover:border-b-blue-800 hover:border-t-blue-800 hover:border-2 hover:grayscale-0"
            >
              <Badge className="p-2 bg-blue-500">Headline</Badge>
              <p className="mt-5  md:text-xl font-semibold text-center text-blue-700 ">
                Besok adalah waktu perawatan yang utama bagi kendaraan kita
              </p>

              <div className="relative my-5  h-35 md:h-60 xl:h-80  \ ">
                <Image
                  src="/news.jpg"
                  fill
                  alt="founder1"
                  className="object-cover"
                  quality={90}
                ></Image>
              </div>

              <Link
                href="#"
                className="underline underline-offset-6 text-blue-700 "
              >
                Read More
              </Link>
            </div>

            {/* Article-1 */}
            <div
              id="article-1"
              className="bg-white grayscale-100 col-span-1 p-6 border-2 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-103 hover:border-b-blue-800 hover:border-t-blue-800 hover:border-2 hover:grayscale-0"
            >
              <Badge className="p-2 bg-blue-500">Headline</Badge>
              <p className="mt-5  md:text-xl font-semibold text-center text-blue-700 ">
                Besok adalah waktu perawatan yang utama bagi kendaraan kita
              </p>

              <div className="relative my-5  h-35 md:h-60 xl:h-80  \ ">
                <Image
                  src="/news.jpg"
                  fill
                  alt="founder1"
                  className="object-cover"
                  quality={90}
                ></Image>
              </div>

              <Link
                href="#"
                className="underline underline-offset-6 text-blue-700 "
              >
                Read More
              </Link>
            </div>

            {/* Article-2 */}
            <div
              id="article-1"
              className="bg-white grayscale-100 col-span-1 p-6 border-2 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-103 hover:border-b-blue-800 hover:border-t-blue-800 hover:border-2 hover:grayscale-0"
            >
              <Badge className="p-2 bg-blue-500">Headline</Badge>
              <p className="mt-5  md:text-xl font-semibold text-center text-blue-700 ">
                Besok adalah waktu perawatan yang utama bagi kendaraan kita
              </p>

              <div className="relative my-5  h-35 md:h-60 xl:h-80  \ ">
                <Image
                  src="/news.jpg"
                  fill
                  alt="founder1"
                  className="object-cover"
                  quality={90}
                ></Image>
              </div>

              <Link
                href="#"
                className="underline underline-offset-6 text-blue-700 "
              >
                Read More
              </Link>
            </div>

            {/* Article-3 */}
            <div
              id="article-1"
              className="bg-white grayscale-100 col-span-1 p-6 border-2 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-103 hover:border-b-blue-800 hover:border-t-blue-800 hover:border-2 hover:grayscale-0"
            >
              <Badge className="p-2 bg-blue-500">Headline</Badge>
              <p className="mt-5  md:text-xl font-semibold text-center text-blue-700 ">
                Besok adalah waktu perawatan yang utama bagi kendaraan kita
              </p>

              <div className="relative my-5  h-35 md:h-60 xl:h-80  \ ">
                <Image
                  src="/news.jpg"
                  fill
                  alt="founder1"
                  className="object-cover"
                  quality={90}
                ></Image>
              </div>

              <Link
                href="#"
                className="underline underline-offset-6 text-blue-700 "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div id="faq-list" className="py-10">
          <p className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#202a44] text-center my-10 tracking-tight leading-snug drop-shadow-sm">
            Frequently Ask Questions
          </p>

          {/* Accordion FAQ */}
          <Accordion
            type="single"
            collapsible
            className="w-full md:w-3/4 mx-auto border border-gray-400 px-5"
            defaultValue="item-1"
          >
            <AccordionItem value="q-1">
              <AccordionTrigger>
                <p className="text-md md:text-xl font-bold">
                  Bagaimana cara melacak paket saya?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-md md:text-lg">
                  Anda dapat melacak paket Anda dengan mudah melalui fitur
                  “Lacak Resi” yang tersedia di halaman utama website REX. Cukup
                  masukkan nomor resi yang Anda terima saat pengiriman. Sistem
                  kami akan menampilkan lokasi terakhir paket Anda beserta
                  status terbarunya secara real-time.
                </p>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value="q-2">
              <AccordionTrigger>
                <p className="text-md md:text-xl font-bold">
                  Berapa lama estimasi waktu pengiriman tiap layanan REX?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-md md:text-lg">
                  REX menyediakan beberapa pilihan layanan dengan estimasi waktu
                  berbeda, sesuai kebutuhan Anda: REX 0 (Zero) – Pengiriman di
                  hari yang sama (same-day delivery), ideal untuk kebutuhan
                  mendesak. REX 1 – Pengiriman keesokan hari (next-day service)
                  dengan jaminan uang kembali jika terjadi keterlambatan.
                  Regular Service – Estimasi 2–5 hari kerja tergantung jarak dan
                  area tujuan. International Service – Durasi bervariasi antara
                  3–10 hari kerja, tergantung negara tujuan dan metode
                  pengiriman (udara atau laut).
                </p>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value="q-3">
              <AccordionTrigger>
                <p className="text-md md:text-xl font-bold">
                  Apakah REX melayani pengiriman internasional?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-md md:text-lg">
                  Ya. REX melayani pengiriman ke lebih dari 200 negara melalui
                  jaringan mitra internasional terpercaya. Layanan internasional
                  kami mencakup pengiriman dokumen, barang ringan, hingga paket
                  besar dengan opsi asuransi dan pelacakan penuh
                </p>
              </AccordionContent>
            </AccordionItem>
            {/*  */}
            <AccordionItem value="q-3">
              <AccordionTrigger>
                <p className="text-md md:text-xl font-bold">
                  Bagaimana proses klaim jika paket saya rusak atau hilang?
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm md:text-md md:text-lg">
                  REX menyediakan layanan klaim untuk kasus paket rusak atau
                  hilang. Langkah yang perlu dilakukan: Laporkan kejadian
                  maksimal 2x24 jam setelah diterima (untuk kerusakan) atau dari
                  tanggal estimasi sampai (untuk kehilangan) Siapkan bukti resi,
                  foto kerusakan, dan bukti nilai barang Klaim akan diproses
                  dalam 7–14 hari kerja setelah dokumen lengkap Klaim penuh
                  diberikan untuk barang yang diasuransikan sesuai syarat dan
                  ketentuan
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


    </>
  );
}
