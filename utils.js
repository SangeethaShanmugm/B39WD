

//import & exports
// 1. named  - preferred
// 2. default 

//named import and exports

 const printDetails3 = ({ name, score, batch } ) => 
 `${name} has got ${score} and she belongs to ${batch}`;


 const double = (n) => n *  2;
 
 const Msg = "This is awesome 😀"

//named exports
export { printDetails3, double, Msg };



//default  exports
// export default printDetails3;