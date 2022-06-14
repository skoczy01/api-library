export const getBookInfo = ({ volumeInfo, id }) => {
  const isTitleEmpty = volumeInfo.title.length === 0;
  const isAuthorExist = volumeInfo.authors;
  const isCategoryExist = volumeInfo.categories;
  const isDescriptionExist = volumeInfo.description;
  const isPublishedDateExist = volumeInfo.publishedDate;
  const isImage = volumeInfo.imageLinks.thumbnail;
  const isLink = volumeInfo.canonicalVolumeLink;

  return {
    title: !isTitleEmpty ? volumeInfo.title : "",
    author: isAuthorExist ? volumeInfo.authors[0] : "",
    category: isCategoryExist ? volumeInfo.categories : "",
    description: isDescriptionExist ? volumeInfo.description : "",
    publishedDate: isPublishedDateExist ? volumeInfo.publishedDate : "",
    image: isImage,
    link: isLink,
    id,
  };
};
