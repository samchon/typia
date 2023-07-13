import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_misc_isClone_ArrayRepeatedRequired = _test_misc_isClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.misc.isClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
