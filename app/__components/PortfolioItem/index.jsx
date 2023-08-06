import Image from "next/image";
import styles from "./styles.module.scss";

const PortfolioItem = ({ img, link, title, children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__pic}>
        <a href={link} title={title} target="_blank" rel="noopener noreferrer">
          <Image src={img} width={800} height={1200} alt={title} />
        </a>
      </div>
      <div className={styles.item__info}>
        <div className={styles.item__header}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <div className={styles.item__text}>{children}</div>
      </div>
    </div>
  );
};

export default PortfolioItem;
