import classes from "./Title.module.css";

export default function Title(props) {
  const count = props.count > 12 ? "12+" : props.count;

  return (
    <div className={classes.titleCont}>
      <h1>Stays in Finland</h1>
      <p>{count} Stays </p>
    </div>
  );
}
