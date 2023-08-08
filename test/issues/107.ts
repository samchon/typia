import typia from "typia";

type A = { a: number } | { a: { a: number } };
const a: [A, A] = [
    { a: 0 },
    {
        a: {
            a: 123,
        },
    },
];
console.log(typia.assert<[A, A]>(a));
