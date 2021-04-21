import styles from "../styles/Home.module.css";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import PageHead from "../components/Head/PageHead";

export default function Home() {
  return (
    <div className="homeWrap">
      <PageHead title="Color Bank" />
      <div className="homeHeader">
        <h1 className={styles.title}>Color Bank</h1>
      </div>
      <div className="thumbnailGrid">
        <Thumbnail path="/palette/red" title="Red" color="red" />
        <Thumbnail path="/palette/yellow" title="Yellow/Orange" color="yellow" />
        <Thumbnail path="/palette/green" title="Green" color="green" />
        <Thumbnail path="/palette/blue" title="Blue" color="blue" />
        <Thumbnail path="/palette/pink" title="Pink" color="pink" />
        <Thumbnail path="/palette/purple" title="Purple" color="purple" />
        <Thumbnail path="/palette/grey" title="Grey" color="grey" />
        <Thumbnail path="/palette/black" title="Black" color="black" />
      </div>
      <div className="homeFooter">
        <span>© 2021 Noah Atkins </span>
      </div>
    </div>
  );
}
