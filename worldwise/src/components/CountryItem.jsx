import styles from "./CountryItem.module.css";

// eslint-disable-next-line react/prop-types
function CountryItem({ country }) {
  // eslint-disable-next-line react/prop-types
  const { emoji, country: countryName } = country;
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
