export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(./src/images/${props.coverImg})` }}>
        {badgeText && (
          <div className="soldout-online">
            <p className="uppercase">{badgeText}</p>
          </div>
        )}
      </div>
      <div className="card-context">
        <div className="card-info">
          <div className="ratings">
            <img src="./src/images/star.png" alt="star rating" className="star" />
            <p className="p-ratings">{props.stats.rating}</p>
          </div>
          <div className="info">
            <p>
              ({props.stats.reviewCount}) · {props.location}
            </p>
          </div>
        </div>
        <div className="card-description">
          <p className="card-p">{props.title}</p>
        </div>
        <div className="card-price">
          <p className="card-p">
            <b>From ${props.price}</b> / person
          </p>
        </div>
      </div>
    </div>
  );
}
