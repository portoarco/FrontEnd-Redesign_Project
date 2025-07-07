import Image from "next/image";

function Banner() {
  return (
    <div className="">
      <div className=" w-[99vw] h-[100vh] xl:h-[100vh] lg:h-[100vh] absolute -z-10">
        <Image
          src="/mainbanner.jpg"
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
