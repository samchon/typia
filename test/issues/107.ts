import TSON from "../../src";

type A = { a: number } | { a: { a: number } };
const a: [A, A] = [
    { a: 0 },
    {
        a: {
            a: 123,
        },
    },
];
console.log(TSON.assertType<[A, A]>(a));
