import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_ArrayRepeatedUnion = _test_clone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    (input) => typia.clone(input),
);
