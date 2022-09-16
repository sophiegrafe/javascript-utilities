/**
 ** @author {your name}
 ** @function
 ** @return {boolean}
 * @param args
 **/
const isDate = args => args > 0 && args instanceof Date && !isNaN(args);

export default isDate;