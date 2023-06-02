import typia from "../../../src";

import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_ArrayRepeatedNullable = _test_clone(
    "ArrayRepeatedNullable",
    ArrayRepeatedNullable.generate,
    typia.createClone<ArrayRepeatedNullable>(),
);
