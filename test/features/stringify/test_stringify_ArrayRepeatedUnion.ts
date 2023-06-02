import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_ArrayRepeatedUnion = _test_stringify(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.stringify(input),
);
