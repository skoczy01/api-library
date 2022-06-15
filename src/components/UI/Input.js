import classes from "./Input.module.scss";
export function Input(props) {
  return (
    <div className={`${props.className ? props.className : classes.inputBox}`}>
      <label htmlFor={props.id} className={classes.placeholder}>
        {props.children}
      </label>
      <div className={classes.cut}></div>

      <input
        type={props.type}
        id={props.id}
        onChange={props.onInputChange}
        value={props.initialValue}
        disabled={props.disabled}
        max={props.max}
        name={props.name}
        className={classes.input}
      />
    </div>
  );
}
