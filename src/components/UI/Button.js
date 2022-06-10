import classes from "./Button.module.scss";
export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className ? props.className : classes.submit}
    >
      {props.children}
    </button>
  );
}
