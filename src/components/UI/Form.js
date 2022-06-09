export default function Form(props) {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
}
