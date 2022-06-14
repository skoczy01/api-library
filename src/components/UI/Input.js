import classes from "./Input.module.scss";
export function Input(props) {
  return (
    <div className={`${props.className ? props.className : classes.inputBox}`}>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onInputChange}
        value={props.initialValue}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        name={props.name}
      />
    </div>
  );
}
