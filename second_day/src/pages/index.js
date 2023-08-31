import { HotiinZurag } from "@/components/HotiinZurag";

export default function App() {
  const list = [
    {
      city: "london",
      image:
        "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75%203840w%22",
    },
    {
      city: "china",
      image:
        "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg",
    },
    {
      city: "new york",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZJS7htrwXJB_tpqvNGq_ysX7ZGFGFUXooQ&usqp=CAU",
    },
    {
      city: "singapore",
      image:
        "https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg",
    },
    {
      city: "sydney",
      image: "https://media.timeout.com/images/103161245/image.jpg",
    },
  ];
  function loop() {
    let result = [];
    for (let i = 0; i < 5; i++) {
      result.push(<HotiinZurag city={list[i].city} image={list[i].image} />);
    }
    return result;
  }
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loop()}
    </div>
  );
}
