import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertClone(input),
    ArrayUnion.SPOILERS,
);
