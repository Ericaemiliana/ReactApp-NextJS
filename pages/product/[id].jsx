import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const smoothie = {
    id: 1,
    img: "/img/smoothie.jpg",
    name: "Coconut",
    price: [9, 12, 15],
    desc: "Great source of fiber, has a  high amount of manganese that is needed to metabolize fat and supports functions of enzymes in the body, has a high content of medium-chain triglycerides that are used by the body to produce energy, boosts heart health, helps maintain a healthy digestive tract.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={smoothie.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{smoothie.name}</h1>
        <span className={styles.price}>${smoothie.price[size]}</span>
        <p className={styles.desc}>{smoothie.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/smothie-size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/smothie-size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/smothie-size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Chiaseeds"
              name="Chiaseeds"
            />
            <label htmlFor="Chiaseeds">Chia Seeds</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Wheyprotein"
              name="Wheyprotein"
            />
            <label htmlFor="Wheyprotein">Whey protein</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="greekyougurt"
              name="greekyougurt"
            />
            <label htmlFor="greekyougurt">Greck Yougurt</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;