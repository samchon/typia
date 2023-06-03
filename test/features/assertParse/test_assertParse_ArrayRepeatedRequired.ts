import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertParse_ArrayRepeatedRequired = _test_assertParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.assertParse<ArrayRepeatedRequired>(input),
    ArrayRepeatedRequired.SPOILERS,
);
