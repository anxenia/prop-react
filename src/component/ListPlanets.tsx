import { useState, useEffect } from "react";
import { Planet } from './Planet';
import axios from "axios";

export const ListPlanets = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/`
        );
        setData(response.data.results);
        setLoading(false);
        console.log(response.data.results);
  
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const renderContent = (data: Array<Info>) => {
    return (
      <>
        {data.map((info: Info, index: number) => (
          <Planet
            key={index}
            item={info}
          />
        ))}
      </>
    )
  }

  const listingPlanets = (
    <div className="c-planets">
        {!loading ? renderContent(data as Array<Info>) : <div>A moment please...</div>}
    </div>
  )

  return listingPlanets;
}

interface Info {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period : string;
  gravity: string;
  population: string;
  surface_water: string;
}
