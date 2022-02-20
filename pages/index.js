import styles from "../styles/Home.module.css";
import DashBoard from "../components/DashBoard";
import Header from "../components/Header";
import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
  );

  return {
    props: { items: data },
  };
};

export default function Home({items}) {
  return (
    <div className={styles.container}>
      <Header />
      <DashBoard items={items}/>
    </div>
  );
}
