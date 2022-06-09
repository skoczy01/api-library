import Button from "../../../UI/Button";
import classes from "./LocalLibaryItems.module.scss";
export default function LocalLibaryItems(props) {
  const notFound = <span className={classes.notfound}>Not entered</span>;
  const booksListRender = props.books.map((book) => (
    <ul key={book.id} className={classes.list && classes.ulItems}>
      <div>
        <div className={classes.dataAndPhotoBox}>
          <div className={classes.liBox}>
            <li
              className={
                book.title
                  ? book.title.length >= 32
                    ? classes.titles
                    : null
                  : null
              }
            >
              Title :{" "}
              <span className={classes.bookData}>
                {book.title ? book.title : notFound}
              </span>
            </li>
            <li
              className={
                book.author
                  ? book.author.length > 1
                    ? classes.authorsbar
                    : null
                  : null
              }
            >
              Author:{" "}
              <span className={classes.bookData}>
                {book.author ? book.author : notFound}
              </span>
            </li>
            <li>
              Category:{" "}
              <span className={classes.bookData}>
                {book.category ? book.category : notFound}
              </span>
            </li>
          </div>

          <a href={book.link ? book.link : "#"}>
            <img
              src={
                book.image
                  ? book.image
                  : "http://books.google.com/books/content?id=Nd1bAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
              }
              alt="img"
            />
          </a>
        </div>

        <li>
          Description:{" "}
          {book.description ? (
            <p className={classes.description}>{book.description}</p>
          ) : (
            notFound
          )}
        </li>
        <li>
          Published date:{" "}
          <span className={classes.bookData}>
            {book.publishedDate ? book.publishedDate : notFound}
          </span>
        </li>
      </div>

      <Button
        className={classes.btn}
        onClick={() => {
          props.deleteHandler(book.id);
        }}
      >
        Remove
      </Button>
    </ul>
  ));
  return <div className={classes.container}>{booksListRender}</div>;
}
