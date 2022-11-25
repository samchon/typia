import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_native_union = _test_assert_stringify(
    "union native",
    NativeUnion.generate,
    TSON.createAssertStringify<NativeUnion>(),
    NativeUnion.SPOILERS,
);
