import typia from "../../../src";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_NativeSimple = _test_assert(
    "NativeSimple",
    NativeSimple.generate,
    typia.createAssert<NativeSimple>(),
    NativeSimple.SPOILERS,
);
