/**
 ** @author {your name}
 ** @function
 ** @return
 * @param collection
 * @param n
 **/
const first = (collection, n) => {
if (!collection) throw new Error("Collection is required");
return n? collection.filter((_, index) => index <= n - 1) : collection[0];
}

export default first;
