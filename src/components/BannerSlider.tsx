import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import lamp from "/slider/lamp.png";
import Sofa from "/slider/velvet_fabric_sofa.png";
import { Ellipse } from "@/icons";
import { SalesBadge } from "@/icons";
import Container from "@/components/Container";

export default function BannerSlider() {
  return (
    <div className="cs__bullets relative overflow-x-hidden xl:max-w-screen">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="bg-cool-blue h-[764px] overflow-x-hidden xl:max-w-screen"
      >
        <SwiperSlide>
          <Container>
            <img
              src={lamp}
              alt=""
              className="3xl:left-[168px] absolute top-0 left-[15%] w-32 xl:left-5 xl:w-auto 2xl:left-[44px]"
            />
            <div className="3xl:left-[375px] absolute top-[450px] left-6/12 z-10 w-11/12 -translate-x-6/12 text-center xl:top-[203px] xl:left-[200px] xl:max-w-[550px] xl:-translate-x-0 xl:text-start 2xl:left-[245px] 2xl:max-w-[644px]">
              <p className="font-lato text-accent mb-2 font-bold">
                Best Furniture For Your Castle....
              </p>
              <p className="text-[53px] leading-[76px] font-bold tracking-[0.24px]">
                New Furniture Collection Trends in 2020
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Button className="bg-accent hover:border-accent hover:text-accent rounded-[4px] border-2 border-transparent px-10 py-[25px] text-[17px] font-medium text-white hover:bg-transparent">
                Shop Now
              </Button>
            </div>
            <div className="3xl:right-[173px] absolute top-10 right-18 xl:right-[20px]">
              <div className="relative">
                <Ellipse className="md:h-[400px] md:w-[400px] xl:h-[689px] xl:w-[706px]" />
                <img
                  src={Sofa}
                  alt=""
                  className="absolute top-[50px] right-14 md:w-88 xl:w-auto"
                />
                <div className="absolute top-8 right-0">
                  <SalesBadge className="md:h-[72px] md:w-[170px] xl:h-[140px] xl:w-[139px]" />
                  <p className="absolute inline-block text-center font-bold text-white md:top-4 md:left-16 md:text-base xl:top-[42px] xl:left-[34.39px] xl:text-[35px] xl:leading-10">
                    50% <br></br>off
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
