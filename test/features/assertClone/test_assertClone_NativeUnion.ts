import typia from "typia";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_NativeUnion = _test_assertClone(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.assertClone(input),
    NativeUnion.SPOILERS,
);
