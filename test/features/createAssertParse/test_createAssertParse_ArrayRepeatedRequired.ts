import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createAssertParse_ArrayRepeatedRequired = _test_assertParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createAssertParse<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
