import classes from "./Form.module.scss";
export function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      <h2 className={classes.title}>{props.titleForm}</h2>
      <h3 className={classes.subtitle}>{props.subtitleForm}</h3>
      {props.children}
    </form>
  );
}
