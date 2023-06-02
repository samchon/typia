import typia from "../../../src";

import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_ArrayRepeatedUnion = _test_clone(
    "ArrayRepeatedUnion",
    ArrayRepeatedUnion.generate,
    typia.createClone<ArrayRepeatedUnion>(),
);
