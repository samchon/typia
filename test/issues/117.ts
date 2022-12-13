import typia from "../../src";

function test<T extends object>(
    array: T,
    stringify: (value: T) => string,
): void {
    console.log(array.constructor.name, stringify(array));
}
const values: number[] = [1, 2, 3, 4];
test(Buffer.from(values), (input) => typia.stringify(input));
test(new Uint8Array(values), (input) => typia.stringify(input));
