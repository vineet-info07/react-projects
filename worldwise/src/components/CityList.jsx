import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
export default function CityList({ cities, isLoading }) {
  console.log(cities, isLoading);

  if (isLoading) return <Spinner />;

  // eslint-disable-next-line react/prop-types
  if (!cities.length)
    return (
      <Message message="Add your first city by clciking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {
        // eslint-disable-next-line react/prop-types
        cities.map((city) => (
          <CityItem key={city.id} city={city} />
        ))
      }
    </ul>
  );
}
