/*A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself. However, 4 is composite because it is a product (2 × 2) in which both numbers are smaller than 4. Primes are central in number theory because of the fundamental theorem of arithmetic: every natural number greater than 1 is either a prime itself or can be factorized as a product of primes that is unique up to their order.*/
function isPrimmeNumber(N) {
  let isPrime = true;
  if(N === 1) {
    isPrime = false;
  } else {
    for(var i = 2; i < N ; i++) {
      if(N % i === 0) {
         isPrime = false;
      }
    }
  }
  return isPrime;
}
