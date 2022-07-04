import React from "react";
import { useRef } from "react";
import styles from "./Intro.module.css";
export default function SectionGray2() {
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
      headEm: "Find Your Car and Configure It",
      panelEm: "Find Your Car and Configure It1",
      panelP: `Embark on your shopping experience by selecting your preferred
                Hyundai car. Your experience is eased with the readily available
                information on vehicle performance, convenience and safety
                feature`,
      dataStatus: "expanded",
    },
    {
      headSpan: "Step 2",
      headEm: "Review Your Selection",
      panelEm: "Review Your Selection",
      panelP: `You can choose here to book the car only or make a full online purchase. 
                For a Full Online Purchase, you can select your desired promotion,
                accessories and extended warranty. A sales consultant will be assigned
                to you to assist you in the online journey . You can even choose if you
                want your car to be delivered at home or pick it up from Dealership.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 3",
      headEm: "Booking and Quotation",
      panelEm: "Booking and Quotation",
      panelP: `Send a request for a quote to the Dealer you have selected on the basis of
              the configuration and financing choices made in the previous steps.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 4",
      headEm: "Financing Option",
      panelEm: "Financing Option",
      panelP: `You can complete your purchase online either by paying directly through your bank
       account or applying for a loan with our banking partners. Check your car loan eligibility
        and estimated loan amount with our online banking partners. Your Sales Consultant is always
        there to assist you to complete your online loan documentation.`,
      dataStatus: "disabled",
    },
    {
      headSpan: "Step 5",
      headEm: "Finalize Order",
      panelEm: "Finalize Order",
      panelP: `Embark on your shopping experience by selecting your preferred
                Hyundai car. Your experience is eased with the readily available
                information on vehicle performance, convenience and safety
                feature`,
      dataStatus: "disabled",
    },
  ];

  return (
    <div className={styles._sectionGray}>
      <div className={styles._wrap1}>
        <h3 className={styles._contentTitle_gray}>
          How it works in 5 simple steps.
        </h3>
        <div className={styles._accordion_wrap}>
          {ACCORDION_ITEMS.map((item, index) => (
            <div
              className={styles._item}
              data-status={item.dataStatus}
              onClick={(e) => handleClickAccordion(e, index)}
              ref={(element) => (refAccordion.current[index] = element)}
              key={`accordion-${index}-${item.headSpan}`}
            >
              <div className={styles._head}>
                <button>
                  <span>{item.headSpan}</span>
                  <em>{item.headEm}</em>
                </button>
              </div>
              <div className={styles._panel}>
                <em>{item.panelEm}</em>
                <p>{item.panelP}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
