/* eslint-disable no-unused-vars */
import { useParams, useSearchParams } from "react-router-dom";

function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
}

export default City;
