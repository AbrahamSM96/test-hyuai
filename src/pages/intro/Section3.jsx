import { useRef } from "react";
import styles from "./Intro.module.css";
export default function Section3() {
  const refAccordion = useRef([]);
  const handleClickAccordion = (e, index) => {
    let dataStatus = refAccordion.current[index].getAttribute("data-status");
    let actualElement = refAccordion.current[index];
    refAccordion.current.forEach((allElements) => {
      if (dataStatus === "disabled") {
        allElements.setAttribute("data-status", "disabled");
        actualElement.setAttribute("data-status", "expanded");
      } else if (dataStatus === "expanded") {
        allElements.setAttribute("data-status", "disabled");
        actualElement.setAttribute("data-status", "disabled");
      }
    });
  };
  const ACCORDION_ITEMS = [
    {
      headSpan: "Step 1",
      panelP: `Embark on your shopping experience by selecting your preferred
                Hyundai car. Your experience is eased with the readily available
                information on vehicle performance, convenience and safety
                feature`,
      dataStatus: "expanded",
    },
    {
      headSpan: "Step 2",
      panelP: `You can choose here to book the car only or make a full online purchase. 
                For a Full Online Purchase, you can select your desired promotion,
                accessories and extended warranty. A sales consultant will be assigned
                to you to assist you in the online journey . You can even choose if you
                want your car to be delivered at home or pick it up from Dealership.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 3",
      panelP: `Send a request for a quote to the Dealer you have selected on the basis of
              the configuration and financing choices made in the previous steps.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 4",

      panelP: `You can complete your purchase online either by paying directly through your bank
       account or applying for a loan with our banking partners. Check your car loan eligibility
        and estimated loan amount with our online banking partners. Your Sales Consultant is always
        there to assist you to complete your online loan documentation.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 5",
      panelP: `Embark on your shopping experience by selecting your preferred
                Hyundai car. Your experience is eased with the readily available
                information on vehicle performance, convenience and safety
                feature`,
      dataStatus: "disabled",
    },
  ];
  return (
    <div className={styles._wrap2}>
      <h3>Frequently asked questions.</h3>
      <p className={styles._content}>
        Shopping online for a car is much the same as shopping online for
        anything. But it’s still important you feel completely comfortable and
        knowledgeable about all the specifics. So take a look through the
        questions below that other people wanted cleared up before they took
        their next steps.
      </p>
      <div className={styles._accordion_wrap2}>
        {ACCORDION_ITEMS.map((item, index) => (
          <div
            className={styles._item2}
            data-status={item.dataStatus}
            onClick={(e) => handleClickAccordion(e, index)}
            ref={(element) => (refAccordion.current[index] = element)}
            key={`accordion2-${index}-${item.headSpan}`}
          >
            <div className={styles._head2}>
              <span>
                {item.headSpan}
                <i></i>
              </span>
            </div>
            <div className={styles._panel2}>
              <p className="">{item.panelP}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
