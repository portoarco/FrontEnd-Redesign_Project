import Image from "next/image";

function Banner() {
  return (
    <div className="">
      <div className=" w-full md:w-[99vw] h-[100vh] xl:h-[98vh] lg:h-[98vh] absolute -z-10">
        <Image
          src="/mainbanner2.webp"
          // width={100}
          // height={100}
          fill
          alt="mainbanner"
          className="object-cover"
          style={{ filter: "brightness(0.7)" }}
        ></Image>
      </div>
    </div>
  );
}
export default Banner;
