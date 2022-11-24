import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_native_union = _test_assert(
    "union native",
    NativeUnion.generate,
    TSON.createAssert<NativeUnion>(),
    NativeUnion.SPOILERS,
);
