export const Planet = (prop: Info) => {
  const planet = (
    <div className="c-planet">
      <h2>{prop.item?.name}</h2>
      <p>Diameter: {prop.item?.diameter}<br />
      Rotation Period: {prop.item?.rotation_period}<br />
      Orbital Period: {prop.item?.orbital_period}<br />
      Gravity: {prop.item?.gravity}<br />
      Population: {prop.item?.population}<br />
      Surface Water: {prop.item?.surface_water}</p>
    </div>
  );

  return planet;
};

interface Info {
  item: {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    surface_water: string;
  }
}
