import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_validateParse_ArrayRepeatedRequired = _test_validateParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validateParse<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
