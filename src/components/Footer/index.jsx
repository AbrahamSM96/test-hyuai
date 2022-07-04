import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles._content}>
      <div className={styles._innerWrap}>
        <div className={styles._logo}></div>
        <div className={styles._contactBox}>
          <p className="addr">
            <i className={styles._ic_loca}></i>12, Heolleung-ro, Seocho-gu,
            Seoul, Republic of Korea, 06797
          </p>
          <p className="addr">
            <i className={styles._ic_call}></i>
            <a href="tel:82-000–0000">+82 ) 000 – 0000</a>
            <a href="tel:82-000–0000">+82 ) 1123 - 23451</a>
          </p>
          <p className="addr">
            <i className={styles._ic_mail}></i>
            <a href="mailto:Hyundai8282@hyndai.com">Hyundai8282@hyndai.com</a>
          </p>
        </div>
        <div className={styles._socialBox}>
          <ul className={styles._utils}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
          <div className={styles._mores}>
            <ul className={styles._social}>
              <li>
                <a href="#" className={styles._sns_mail}>
                  <span className="a11y">e-Mail</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles._sns_yu}>
                  <span className="a11y">Youtube</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles._sns_fb}>
                  <span className="a11y">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles._sns_tw}>
                  <span className="a11y">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className={styles._sns_in}>
                  <span className="a11y">Instargram</span>
                </a>
              </li>
            </ul>
            <p className={styles._copyright}>
              ⓒ Copyright 2020 Hyundai motor Company. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
