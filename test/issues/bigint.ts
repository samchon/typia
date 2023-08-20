import fs from "fs";
import typia from "typia";

import { TagRange } from "../structures/TagRange";
import { TagRangeBigInt } from "../structures/TagRangeBigInt";

fs.writeFileSync(
    __dirname + "/bigint.js",
    [
        "//-----------------------------------------",
        "// INT",
        "//-----------------------------------------",
        "",
        typia.createRandom<TagRange>().toString(),
        "//-----------------------------------------",
        "// BIGINT",
        "//-----------------------------------------",
        typia.createRandom<TagRangeBigInt>().toString(),
    ].join("\n"),
    "utf8",
);

for (let i: number = 0; i < 10; ++i) {
    const value = typia.random<TagRange>();
    typia.assert(value);
}

for (let i: number = 0; i < 10; ++i) {
    const value = typia.random<TagRangeBigInt>();
    try {
        typia.assert(value);
    } catch (exp) {
        console.log(value);
        throw exp;
    }
}

// (input) => {
//     const $io0 = (input) =>
//         Array.isArray(input.value) &&
//         input.value.every(
//             (elem) => "object" === typeof elem && null !== elem && $io1(elem),
//         );
//     const $io1 = (input) =>
//         "bigint" === typeof input.greater &&
//         BigInt(3) < input.greater &&
//         "bigint" === typeof input.greater_equal &&
//         BigInt(3) <= input.greater_equal &&
//         "bigint" === typeof input.less &&
//         BigInt(7) > input.less &&
//         "bigint" === typeof input.less_equal &&
//         BigInt(7) >= input.less_equal &&
//         "bigint" === typeof input.greater_less &&
//         BigInt(3) < input.greater_less &&
//         BigInt(7) > input.greater_less &&
//         "bigint" === typeof input.greater_equal_less &&
//         BigInt(3) <= input.greater_equal_less &&
//         BigInt(7) > input.greater_equal_less &&
//         "bigint" === typeof input.greater_less_equal &&
//         BigInt(3) < input.greater_less_equal &&
//         BigInt(7) >= input.greater_less_equal &&
//         "bigint" === typeof input.greater_equal_less_equal &&
//         BigInt(3) <= input.greater_equal_less_equal &&
//         BigInt(7) >= input.greater_equal_less_equal &&
//         "bigint" === typeof input.equal &&
//         BigInt(10) <= input.equal &&
//         BigInt(10) >= input.equal;
//     return "object" === typeof input && null !== input && $io0(input);
// };
