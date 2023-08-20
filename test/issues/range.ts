import typia from "typia";

interface ISomething {
    /**
     * @type int
     */
    int: number;

    /**
     * @type uint
     */
    uint: number;

    /**
     * @type int32
     */
    int32: number;

    /**
     * @type uint32
     */
    uint32: number;

    int64: bigint;

    /**
     * @type uint64
     */
    uint64: bigint;
}

console.log(typia.createIs<ISomething>().toString());

// (input) => {
//     return (
//         // object
//         "object" === typeof input &&
//         null !== input &&
//         // int
//         "number" === typeof input.int &&
//         Number.isFinite(input.int) &&
//         Math.floor(input.int) === input.int &&
//         // uint
//         "number" === typeof input.uint &&
//         Number.isFinite(input.uint) &&
//         Math.floor(input.uint) === input.uint &&
//         0 <= input.uint &&
//         // int32
//         "number" === typeof input.int32 &&
//         Number.isFinite(input.int32) &&
//         Math.floor(input.int32) === input.int32 &&
//         -2147483648 <= input.int32 &&
//         input.int32 <= 2147483647 &&
//         // uint32
//         "number" === typeof input.uint32 &&
//         Number.isFinite(input.uint32) &&
//         Math.floor(input.uint32) === input.uint32 &&
//         0 <= input.uint32 &&
//         input.uint32 <= 4294967295 &&
//         // bigint
//         "bigint" === typeof input.int64 &&
//         // uint64
//         "bigint" === typeof input.uint64 &&
//         BigInt(0) <= input.uint64
//     );
// };
