/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numberEnd: number): number => numberEnd * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const num = numbers.map((numbered: string): number =>
        isNaN(parseInt(numbered)) === true ? 0 : parseInt(numbered)
    );
    return num;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const money = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.replace("$", "") : amount
    );
    const num = money.map((moneyInt: string): number =>
        isNaN(parseInt(moneyInt)) === true ? 0 : parseInt(moneyInt)
    );
    return num;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const question = messages.filter(
        (cap: string): boolean => cap.includes("?") != true
    );
    const capital = question.map((caps: string): string =>
        caps.includes("!") === true ? caps.toUpperCase() : caps
    );
    return capital;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((cap: string): boolean => cap.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colour = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return colour;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (addends.length === 0) {
        return "0=0";
    }
    const math = addends.join("+");
    return sum + "=" + math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negative: number[] = [];
    let first = false;
    let sum = 0;
    values.filter((num: number): void => {
        if (num < 0 && first === false) {
            negative.push(num);
            negative.push(sum);
            first = true;
        } else {
            negative.push(num);
            sum += num;
        }
    });
    if (first === false) {
        negative.push(sum);
    }
    return negative;
}
