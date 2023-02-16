import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayUnion = _test_clone(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createClone<ArrayUnion>(),
);
