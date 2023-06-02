import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_ArrayRepeatedRequired = _test_clone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    typia.createClone<ArrayRepeatedRequired>(),
);
