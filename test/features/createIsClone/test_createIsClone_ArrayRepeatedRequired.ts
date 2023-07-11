import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createIsClone_ArrayRepeatedRequired = _test_isClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createIsClone<ArrayRepeatedRequired>(),
    ArrayRepeatedRequired.SPOILERS,
);
