import typia from "typia";
import { v4 } from "uuid";

import { TagCustom } from "../structures/TagCustom";

TagCustom.generate;

console.log(
    typia.createIs<TagCustom>()({
        id: v4(),
        dolloar: "1234",
        postfix: "abcdabcd",
        log: 100,
    }),
);

// (input) => {
//     const $is_uuid = typia_1.default.createIs.is_uuid;
//     const $is_custom = typia_1.default.createIs.is_custom;
//     const $io0 = (input) =>
//         "string" === typeof input.id &&
//         true === $is_uuid(input.id) &&
//         "string" === typeof input.dolloar &&
//         $is_custom("dolloar", "string", "", input.dolloar) &&
//         "string" === typeof input.postfix &&
//         $is_custom("postfix", "string", "abcd", input.postfix) &&
//         "number" === typeof input.log &&
//         Number.isFinite(input.log) &&
//         $is_custom("powerOf", "number", "10", input.log);
//     return "object" === typeof input && null !== input && $io0(input);
// };
