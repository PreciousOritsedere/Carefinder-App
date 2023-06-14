import Image from "next/image";
import styles from "./page.module.css";
import Location_search from "@/Components/Location_Search/Location_search";
import Background_icons from "@/assets/home/background_icons.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.first_cont}>

        <h1>
          Find Your Nearest Hospital in Just a Few <span>Clicks!</span>
        </h1>
        <p>
          Experience the peace of mind that comes from knowing that medical help
          is just a <span>click</span> away.
        </p>
      </div>
      <Location_search />
      <p> Experience the peace of mind that comes from knowing that medical help
          is just a <span>click</span> away.
        </p>
    </main>
  );
}
