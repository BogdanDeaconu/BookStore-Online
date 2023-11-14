import styles from "./CarouselItem.module.scss";

const CarouselItem: React.FC<{
  image: string;
  title: string;
  text: string;
  key: number;
  isvisible: boolean;
}> = (props) => {
  return (
    <div
      className={styles.carouselitem}
      style={{ display: props.isvisible ? "block" : "none" }}
    >
      <img src={props.image} className="d-block w-100" alt={props.title} />
      <div className={styles.module}>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
