import styles from "./Button.module.css";
export default function Button({ text }) {
  return (
    <div className={styles._btn_blue}>
      <button type="button">{text}</button>
    </div>
  );
}
