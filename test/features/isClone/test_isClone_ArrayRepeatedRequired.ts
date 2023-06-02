import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_isClone_ArrayRepeatedRequired = _test_isClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.isClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
