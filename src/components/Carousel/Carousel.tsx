import React, { useState } from "react";
import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";

import CarouselItemModel from "../../models/CarouselItem";

const Carousel: React.FC<{ carouselData: CarouselItemModel[] }> = (props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > props.carouselData.length) {
      newIndex = props.carouselData.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      {props.carouselData.map((carouselitem) => (
        <CarouselItem
          key={carouselitem.id}
          image={carouselitem.image}
          title={carouselitem.title}
          text={carouselitem.text}
          isvisible={carouselitem.id === activeIndex}
        />
      ))}

      <div className={styles.controls}>
        {props.carouselData.map((carouselitem) => (
          <div className={styles.line} key={carouselitem.id}>
            <button
              onClick={() => updateIndex(carouselitem.id)}
              className={`${
                carouselitem.id === activeIndex
                  ? styles.button_inactive
                  : styles.button_active
              }`}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
