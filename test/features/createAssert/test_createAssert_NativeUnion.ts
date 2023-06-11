import typia from "../../../src";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_NativeUnion = _test_assert(
    "NativeUnion",
    NativeUnion.generate,
    typia.createAssert<NativeUnion>(),
    NativeUnion.SPOILERS,
);
