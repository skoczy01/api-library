import classes from "./Form.module.scss";
export function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      {props.titleForm ? (
        <h2 className={classes.title}>{props.titleForm}</h2>
      ) : null}
      {props.subtitleForm ? (
        <h3 className={classes.subtitle}>{props.subtitleForm}</h3>
      ) : null}{" "}
      {props.children}
    </form>
  );
}
