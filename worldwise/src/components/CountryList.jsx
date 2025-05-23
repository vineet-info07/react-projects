import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
export default function CountryList({ cities, isLoading }) {
  console.log(cities, isLoading);

  if (isLoading) return <Spinner />;

  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return (
      <Message message="Add your first city by clciking on a city on the map" />
    );

  // eslint-disable-next-line react/prop-types
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {
        // eslint-disable-next-line react/prop-types
        countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))
      }
    </ul>
  );
}
