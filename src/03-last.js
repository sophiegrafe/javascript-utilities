/**
 ** @author {your name}
 ** @function
 ** @return
 * @param collection
 * @param n
 **/
const last = (collection, n) => {
  if (!collection) throw new Error("Collection is required");
  return n && n !== 0? collection.slice(-n) : collection[collection.length - 1];
}

export default last;