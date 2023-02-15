import typia from "typia";

import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ArrayUnion = _test_assert(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assert(input),
    ArrayUnion.SPOILERS,
);
