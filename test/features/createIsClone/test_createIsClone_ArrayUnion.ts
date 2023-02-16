import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ArrayUnion = _test_isClone(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createIsClone<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
