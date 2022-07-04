import styles from "./Intro.module.css";
export default function Section4() {
  return (
    <div className={styles._section4_img}>
      <div className={styles._wrapSection4}>
        <div className={styles._groups4}>
          <h3 className="content_title">
            <span className="normal">Ready to</span>
            <br />
            take the next step?
          </h3>
          <div className={styles._quickButton}>
            <button
              className={styles._build}
              onclick="hlayerOpen('SelectDelaer')"
            >
              <i></i>
              <span>Let&rsquo;s get build my car</span>
            </button>
            <a href="../../inventory/select_vehicle.html" className="inventory">
              <i></i>
              <span>Look around inventory car nearby</span>
            </a>
            <button
              className={styles._estimate}
              onclick="hlayerOpen('util-TradeIn')"
            >
              <i></i>
              <span>Try trade-in estimate</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
