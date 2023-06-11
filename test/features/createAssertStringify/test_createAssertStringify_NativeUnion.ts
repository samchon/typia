import typia from "../../../src";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_NativeUnion = _test_assertStringify(
    "NativeUnion",
    NativeUnion.generate,
    typia.createAssertStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
