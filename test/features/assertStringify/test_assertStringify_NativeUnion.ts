import typia from "../../../src";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_NativeUnion = _test_assertStringify(
    "NativeUnion",
    NativeUnion.generate,
    (input) => typia.assertStringify(input),
    NativeUnion.SPOILERS,
);
