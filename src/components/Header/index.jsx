import { useState } from "react";
import Menu from "@components/Menu";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {
  const icons_desktop = [{ href: "/", icon: "" }, { href: "/" }, { href: "/" }];
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(true);
  };

  // $(window).scroll(function (e) {
  //   var st = $(this).scrollTop(),
  //     $header = $(".header_wrap"),
  //     $pageBack = $(".page_back:not(.mo-hide)"),
  //     $buildVehicle = $(".build_vehicle .build_vehicles .tab-pagination"),
  //     $buildHead = $(".build_option .menu_head");

  //   if (st > 300) {
  //     $header.removeClass("show").addClass("hide");
  //     $pageBack.removeClass("show").addClass("hide");
  //     if ($header.length > 0 && $pageBack.length > 0) {
  //       $(".h-contents").css({
  //         "padding-top": $header.height(),
  //       });
  //     }
  //     if ($buildVehicle.length > 0) {
  //       $buildVehicle.removeClass("show").addClass("hide");
  //     }
  //     if ($buildHead.length > 0) {
  //       $buildHead.removeClass("show").addClass("hide");
  //     }
  //   }
  //   if (st < 300) {
  //     $header.removeClass("hide");
  //     $pageBack.removeClass("hide");
  //     $buildVehicle.removeClass("hide");
  //     $buildHead.removeClass("hide");
  //   }

  //   lastSt = st;
  // });

  return (
    <div className={styles._wrap}>
      {openMenu ? (
        <Menu setOpenMenu={setOpenMenu} />
      ) : (
        <>
          <header className={styles._header_content}>
            <div className={styles._logo}></div>
            <div className={styles._head_util}>
              <span className={styles._location}>
                <Link href="/">
                  <a>
                    <i className={styles.ic_loca}></i>
                    Braccia, 07340
                  </a>
                </Link>
              </span>
              <span className={styles._mycar}>
                <Link href="/">
                  <a>
                    <i className={styles.ic_mycar}></i>
                  </a>
                </Link>
              </span>
              <span className={styles._menu} onClick={() => toggleMenu()}>
                <Link href="/">
                  <a></a>
                </Link>
              </span>
            </div>
          </header>
        </>
      )}
    </div>
  );
}
