const element = (
  // Write your code here.
  <div className="card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image-logo"
      />
      ><h1 className="heading1">Kiran V</h1>
      <p className="description">
        Vishnu Institute of Computer Education And Technology <br /> Bhimavaram
        <br />
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image-logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
