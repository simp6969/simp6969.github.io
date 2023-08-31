export function ImageRender(idk) {
  return (
    <div
      className={idk.class}
      style={{
        backgroundImage: `url(${idk.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "440px",
        width: "363px",
        borderRadius: "30px",
      }}
    >
      <p
        style={{
          marginTop: "150px",
          color: "#25313C",
          fontSize: "24px",
          fontFamily: "Cabin",
          padding: "20px",
        }}
      >
        {idk.title}
      </p>
      <p
        style={{
          marginTop: "-30px",
          fontSize: "17px",
          color: "#25313C",
          padding: "20px",
          width: "363px",
          height: "30px",
        }}
      >
        {idk.desc}
      </p>
      <div
        style={{
          display: "flex",
          color: "#6D7D8B",
          padding: "20px",
          gap: "20px",
          fontSize: "16px",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${idk.profile})`,
            height: "45px",
            width: "45px",
            borderRadius: "50%",
          }}
        ></div>
        <p>{idk.profile1}</p>
        <p>{idk.profile2}</p>
      </div>
    </div>
  );
}
