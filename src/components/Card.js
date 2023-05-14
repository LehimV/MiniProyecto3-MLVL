import Star from "../assets/star.png";
import classes from "./Card.module.css";

export default function Card(props) {
  const containerClass = `${classes.cardCont} col-lg-4`;

  return (
    <div className={containerClass}>
      <img className={classes.img} src={props.image} alt="img" />
      <div className={classes.infoCont}>
        <div>
          {props.superhost ? <span className={classes.superHost}>SUPERHOST</span> : null}
          <p className={classes.type}>
            {props.type} . {props.beds} beds
          </p>
        </div>
        <div className={classes.rating}>
          <img src={Star} alt="img" />
          <span>{props.rating}</span>
        </div>
      </div>
      <p className={classes.title}>{props.title}</p>
    </div>
  );
}
