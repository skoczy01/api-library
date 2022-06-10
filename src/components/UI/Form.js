import classes from "./Form.module.scss";
export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      {props.children}
    </form>
  );
}
