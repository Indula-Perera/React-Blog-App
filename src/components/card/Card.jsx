import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/mail.jpg" alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}> {item.createdAt.substring(0,10)} - {""}</span>
          <span className={styles.category}> {item.catSlug}</span>
        </div>
        <Link href="/">
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          
          When a product, that has the word &lsquo;Security&apos; in its name,
          becomes the target of a zero-day attack which ends up compromising
          several other businesses, it is certainly an event to be studied and
          learn from. Hence, we created this timeline that covers everything
          that happened in the Barracuda Email Security Gateway Appliances
          Attack.

        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default card;
