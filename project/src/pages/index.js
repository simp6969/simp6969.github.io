export default function Home() {
  function clciked(name) {
    if (name === "sydney") {
      alert("zuv bn " + name);
    } else {
      alert("buruu bn " + name);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        gap: "10px",
        fontSize: "30px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          width: "900px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          border: "4px solid gray",
          borderRadius: "10px",
          padding: "20px",
          gap: "10px",
        }}
      >
        <h1>aln sydney be?</h1>
        <div style={{ display: "flex", gap: "0.4em" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.3rem",
              fontSize: "20px",
              width: "200px",
              height: "150px",
              borderRadius: "10px",
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZJS7htrwXJB_tpqvNGq_ysX7ZGFGFUXooQ&usqp=CAU)",
              backgroundSize: "cover",
              fontSize: "30px",
            }}
            onClick={() => clciked("new york")}
          ></div>
          <div
            style={{
              height: "150px",
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
              borderRadius: "10px",
              alignItems: "center",
              width: "200px",
              backgroundImage:
                "url(https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg)",
              backgroundSize: "cover",
              padding: "0.3rem",
              fontSize: "30px",
            }}
            onClick={() => clciked("singapore")}
          ></div>
          <div
            style={{
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              fontSize: "30px",
              width: "200px",
              backgroundImage:
                "url(https://media.timeout.com/images/103161245/image.jpg)",
              backgroundSize: "cover",
              padding: "0.3rem",
            }}
            name={3}
            onClick={() => clciked("sydney")}
          ></div>
          <div
            style={{
              height: "150px",
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
              borderRadius: "10px",
              alignItems: "center",
              width: "200px",
              backgroundImage:
                "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg)",
              backgroundSize: "cover",
              padding: "0.3rem",
            }}
            onClick={() => clciked("china")}
          ></div>
        </div>
      </div>
    </div>
  );
}
