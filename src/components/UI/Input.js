import classes from "./Input.module.scss";
export function Input(props) {
  return (
    <div className={classes.inputBox}>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onInputChange}
        value={props.initialValue}
        disabled={props.disabled}
        max={props.max}
        name={props.name}
        className={classes.input}
        placeholder=" "
      />
      <div className={classes.cut}></div>

      <label htmlFor={props.id} className={classes.placeholder}>
        {props.children}
      </label>
    </div>
  );
}
