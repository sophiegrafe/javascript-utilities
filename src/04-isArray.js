/**
 ** @author {your name}
 ** @function
 ** @return
 * @param collection
 **/
const isArray = array => {
    if (array === undefined) throw new Error("collection is required");
    return Array.isArray(array);
};

export default isArray;