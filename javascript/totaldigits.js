// Write a program to find the product of all digits in a number



function getProduct(n) {

    if (n == 0) {
        return 1;
    }

    return (n % 10) * getProduct(Math.floor(n / 10));
}


console.log(getProduct(234));

