export function HotiinZurag(prop) {
  return (
    <div
      style={{
        backgroundImage: `url(${prop.image})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        height: "300px",
        width: "400px",
        border: "4px solid white",
      }}
      onClick={() => alert(prop.city)}
    >
      <h1>{prop.city}</h1>
    </div>
  );
}
