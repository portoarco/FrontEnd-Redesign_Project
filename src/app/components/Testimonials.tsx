"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    avatar: "/founder1.jpg",
    name: "Fajri",
    company: "PT Tokopaedi",
    product: "International",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
  {
    id: 2,
    avatar: "/founder2.jpg",
    name: "Fajar",
    company: "PT Sopipoy",
    product: "Rex 0",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
  {
    id: 3,
    avatar: "/founder3.jpg",
    name: "Fajrul",
    company: "PT Gopal",
    product: "Rex 1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
  {
    id: 4,
    avatar: "/founder4.jpg",
    name: "Fajrudin",
    company: "CV OVA",
    product: "Rex Reguler",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
  {
    id: 5,
    avatar: "/founder5.jpg",
    name: "Mas Adam",
    company: "PT Mencari Cinta Sejati",
    product: "Rex 0",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
  {
    id: 6,
    avatar: "/founder3.jpg",
    name: "Cak Bando",
    company: "PT Sidoarjo Aman Tentram",
    product: "International",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos temporibus velit tempora ea perferendis mollitia, earum fuga esse molestiae!",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full  h-80  p-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="vertical"
          className="w-full h-full relative"
        >
          {/* Tombol Previous di dalam container */}
          <div className="flex justify-center mb-2">
            <CarouselPrevious className=" static" />
          </div>

          <CarouselContent className="h-60 lg:p-10">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="basis-full">
                <Card className="h-full">
                  <CardContent className="p-4 space-y-3 h-full flex flex-col justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="md:h-20 md:w-20 h-10 w-10">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt="avatar"
                        />
                        <AvatarFallback className="text-xs">
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm  md:text-2xl truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500 md:text-xl truncate">
                          {testimonial.company}
                        </p>
                        <p className="text-xs text-blue-500 font-medium truncate md:text-lg">
                          Product: {testimonial.product}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-xs leading-relaxed flex-1 md:text-lg ">
                      {testimonial.comment}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Tombol Next di dalam container */}
          <div className="flex justify-center mt-2">
            <CarouselNext className=" static" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
