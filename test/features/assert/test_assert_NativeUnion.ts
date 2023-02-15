import typia from "typia";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_NativeUnion = _test_assert(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.assert(input),
    NativeUnion.SPOILERS,
);
