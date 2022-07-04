import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import intro_visual_desk from "../../assets/images/intro_visual_pc.png";
import intro_visual_mob from "../../assets/images/intro/intro_visual_mo.png";
export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <figure className={styles._figure}>
          <img className={styles._imgDesktop} src={intro_visual_desk.src} />
          <img className={styles._imgMobile} src={intro_visual_mob.src} />
          <figcaption>
            <h2 className={styles._title}>
              Hyundai
              <p className={styles._logo_clicktobuy}>
                <span className="a11y">Click to Buy</span>
              </p>
            </h2>
            <span>Shop. Sign. Buy. All from home</span>
            <button type="button" className={styles._learn}>
              <span>Learn More</span>
              <i></i>
            </button>
          </figcaption>
        </figure>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
