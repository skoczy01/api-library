import classes from "./Button.module.scss";
export function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className ? props.className : classes.submit}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
