import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@headlessui/react";
import { CartIconMutated, HeartIconMutated } from "@/icons";
import { featuredProducts } from "@/constants/data";

export default function FeaturedProductsSlider() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="max-w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={900}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        className="featured-products w-full"
      >
        {featuredProducts.map((featuredItem, index) => (
          <SwiperSlide className="3xl:!max-w-[270px] mb-18" key={index}>
            <Card className="group cursor-pointer gap-y-0 border-0 bg-[#F6F7FB] py-0 shadow-[0px_4px_25px_#0000001a] hover:bg-[#F7F7F7]">
              <CardHeader className="pt-11 pb-3">
                <CardDescription className="mx-auto text-center">
                  <img
                    src={featuredItem.src}
                    alt={featuredItem.alt}
                    className="min-h-[178px] w-full"
                  />
                  <Button className="data-hover:bg-blue data-active:bg-blue bg-green pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 rounded-xs px-3.5 py-2.5 text-xs text-white opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    View Details
                  </Button>
                </CardDescription>
                <CardAction className="absolute top-6 left-4 isolate hidden gap-x-1 border-0 bg-transparent transition-all duration-300 group-hover:inline-flex">
                  <Button
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full hover:shadow data-active:bg-[#EEEFFB] data-hover:bg-[#EEEFFB]"
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <CartIconMutated
                      className="group-hover: h-6 w-6"
                      gradientId={
                        hovered === 1 ? "gradient-hover" : "gradient-default"
                      }
                    />
                  </Button>

                  <Button
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full hover:shadow data-active:bg-[#EEEFFB] data-hover:bg-[#EEEFFB]"
                    onMouseEnter={() => setHovered(2)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <HeartIconMutated
                      className="h-5 w-5"
                      gradientId={
                        hovered === 2 ? "gradient-hover" : "gradient-default"
                      }
                    />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="group-hover:bg-blue bg-white py-4 text-center transition-all duration-300">
                <p className="text-pink mx-auto mb-2 text-center text-lg font-bold group-hover:text-white">
                  {featuredItem.title}
                </p>
                <div className="mb-3"></div>
                <p className="text-blue mb-2 text-sm group-hover:text-white">
                  {featuredItem.code}
                </p>
                <span className="text-blue text-sm group-hover:text-white">
                  {featuredItem.price}
                </span>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
