/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let rev = 0;
    const sign = Math.sign(x);

    x = Math.abs(x);

    while (x > 0) {

        const digit = x % 10;

        rev = rev * 10 + digit;

        x = Math.floor(x / 10);
    }

    rev *= sign;

    if (rev < -(2 ** 31) || rev > (2 ** 31) - 1) {
        return 0;
    }

    return rev;
};



