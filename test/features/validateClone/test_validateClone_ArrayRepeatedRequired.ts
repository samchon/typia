import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_validateClone_ArrayRepeatedRequired = _test_validateClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validateClone(input),
    ArrayRepeatedRequired.SPOILERS,
);
