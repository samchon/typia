import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_misc_clone_ArrayRepeatedNullable = _test_misc_clone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    (input) => typia.misc.clone(input),
);
