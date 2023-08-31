export function Div1() {
  return (
    <div>
      <h1
        style={{
          marginRight: "150px",
          marginTop: "40px",
          color: "#1E2742",
          fontSize: "48px",
        }}
      >
        team.
      </h1>
    </div>
  );
}
export function Div2() {
  return (
    <div
      style={{
        marginLeft: "450px",
        display: "flex",
        gap: "100px",
        marginTop: "-47px",
        color: "#6D7D8B",
      }}
    >
      <div>Products</div>
      <div>Services</div>
      <div>Contact</div>
      <div>Log in</div>
      <div
        style={{
          width: "128px",
          height: "56px",
          color: "#4DA0FD",
          border: "2px solid #4DA0FD",
          borderRadius: "4px",
          margin: "-20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Get access</div>
      </div>
    </div>
  );
}
export function Div3() {
  return (
    <div style={{ marginTop: "90px", marginLeft: "140px" }}>
      <h1 style={{ fontSize: "50px" }}>Blog Posts</h1>
      <p style={{ fontSize: "18px", color: "#6D7D8B" }}>
        Our latest updates and blogs about managing your team
      </p>
    </div>
  );
}
export function Div4() {
  return (
    <div
      style={{
        width: "100vh",
        height: "100px",
        display: "flex",
        justifyContent: "center;",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "165px",
          height: "44px",
          backgroundColor: "#6D7D8B",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          borderRadius: "10px",
        }}
      >
        <p>Next</p>
        <img src="nav.svg" style={{ height: "20px", marginTop: "15px" }} />
      </div>
    </div>
  );
}
export function Bottom() {
  return (
    <div
      style={{
        height: "336px",
        width: "1440px",
        backgroundColor: "#252B3B",
        marginTop: "122px",
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        flexWrap: "wrap",
      }}
    >
      <div style={{ marginLeft: "139px" }}>
        <h1
          style={{
            color: "#FFFFFF",
            fontSize: "48px",
          }}
        >
          team.
        </h1>
        <div style={{ display: "flex" }}>
          <i
            style={{ marginTop: "22px", color: "white", fontSize: "20px" }}
            class="fa-brands fa-instagram"
          ></i>
          <p style={{ color: "white", fontSize: "20px" }}> instagram</p>
        </div>
        <div style={{ display: "flex", fontSize: "20px", color: "white" }}>
          <i class="fa-brands fa-facebook" style={{ marginTop: "22px" }}></i>
          <p> facebook</p>
        </div>
        <div style={{ display: "flex", fontSize: "20px", color: "white" }}>
          <i style={{ marginTop: "22px" }} class="fa-brands fa-twitter"></i>
          <p>twitter</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "20px",
          marginTop: "22px",
          flexDirection: "column",
        }}
      >
        <p>use cases</p>
        <div>
          <p>Ui design</p>
          <p>UX design</p>
          <p>prototyping</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "20px",

          marginTop: "22px",
          flexDirection: "column",
        }}
      >
        <p>Explore</p>
        <div>
          <p>figma</p>
          <p>Customers</p>
          <p>Why i love figma</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "20px",

          marginTop: "22px",
          flexDirection: "column",
        }}
      >
        <p>Resources</p>
        <div>
          <p>Community Resources Hub</p>
          <p>support </p>
          <p>education</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: "20px",
          marginRight: "10px",
          marginTop: "22px",
          flexDirection: "column",
        }}
      >
        <p>Subscribe to our newsletter</p>
        <div
          style={{
            height: "56px",
            width: "296px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5F7FA",
            color: "#4DA0FD",
            gap: "20px",
            borderRadius: "10px",
          }}
        >
          Email
          <img src="nav.svg" style={{ height: "20px" }} />
        </div>
      </div>
    </div>
  );
}
