import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertClone_ArrayRepeatedRequired = _test_assertClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assertClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
