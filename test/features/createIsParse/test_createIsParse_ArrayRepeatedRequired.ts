import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createIsParse_ArrayRepeatedRequired = _test_isParse(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createIsParse<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
