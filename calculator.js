/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

/* function calculatorModule(){
  var total = 0;
  var memory = 0;
  var calculator = {};
  return calculator;
 }
*/

var calculatorModule = (function() {
  var total = 0;
  var memory = 0;

  return {
    load: load,
    getTotal: getTotal,
    add: add,
    substract: substract,
    multiply: multiply,
    divide:divide
  };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

   function load(x){
    total = x;
    return total;
   }


  /**
   * Return the value of `total`
   * @return { Number }
   */

   function getTotal(){
      return total;
   }



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   function add(x){
    x = x+total;
    return x;
   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   function substract(x){
    x = x-total;
    return x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   function multiply(x){
    x = x*total;
    return x;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x){
    x = x/total;
    return x;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    function recallMemory(){
      return memory;
    }


  /**
   * Stores the value of `total` to `memory`
   */
   function saveMemory(){
      memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

});//THIS IS THE CLOSING BRACKETS FOR THE CALCULATORMODULE
