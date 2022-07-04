import styles from "./Menu.module.css";
export default function Menu({ setOpenMenu }) {
  return (
    <div className={styles._header_menu}>
      <span
        className={styles._menu_close}
        id="menu_close"
        onClick={() => setOpenMenu(false)}
      >
        <a href="#">
          <span className="a11y">Menu Close</span>
        </a>
      </span>
      <div className={`${styles._tmenu} ${styles._menu_e2e}`}>
        <ul className={`${styles._menu} ${styles._menu_e2e}`}>
          <li>
            <a href="../click-to-buy/intro.html">Introduction</a>
          </li>
          <li>
            <a href="../click-to-buy/select_vehicle.html">Build own car</a>
          </li>
          <li>
            <a href="../../inventory/select_vehicle.html">Inventory</a>
          </li>
          <li>
            <a href="../member/login.html">Log-in</a>
          </li>
          <li>
            <a href="../my-click-to-buy/deal_list.html">My Click to Buy</a>
          </li>
          <li>
            <a href="../my-click-to-buy/on_configuring_list.html">
              On Configuring
            </a>
          </li>
          <li>
            <a href="../mypage/edit_profile.html">Account</a>
          </li>
          <li>
            <a href="#">Log-out</a>
          </li>
        </ul>

        {/* <ul className={`${styles._menu} ${styles._menu_o2o}`}>
          <li>
            <a href="../click-to-buy/select_vehicle.html">Build own car</a>
          </li>
          <li>
            <a href="../../inventory/select_vehicle.html">Inventory</a>
          </li>
          <li>
            <a href="../member/login.html">Log-in</a>
          </li>
          <li>
            <a href="#">My Page</a>
          </li>
          <li>
            <a href="#">Log-out</a>
          </li>
        </ul> */}
      </div>
      <div className={styles._tutil}>
        <div className={styles._menu}>
          <p className={styles._ti}>Utility</p>
          <ul>
            <li>
              <a href="#" onclick="hlayerOpen('util-LoanCalc')">
                Loan Calculator
              </a>
            </li>
            <li>
              <a href="#" onclick="hlayerOpen('util-TradeIn')">
                Trade-in
              </a>
            </li>
            <li>
              <a href="#" onclick="hlayerOpen('util-E_Brochure')">
                Download E-Brochure
              </a>
            </li>
            <li>
              <a href="#" onclick="hlayerOpen('util-Testdrive')">
                Book a Test Drive
              </a>
            </li>
          </ul>
        </div>
        <div className={styles._lang}>
          <span>
            <a href="#">Language A</a>
          </span>
          <span>
            <a href="#">Language B</a>
          </span>
          <span>
            <a href="#">Language C</a>
          </span>
        </div>
      </div>
    </div>
  );
}
