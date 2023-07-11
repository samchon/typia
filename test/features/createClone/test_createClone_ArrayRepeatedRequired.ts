import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_createClone_ArrayRepeatedRequired = _test_clone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createClone<ArrayRepeatedRequired>(),
);
