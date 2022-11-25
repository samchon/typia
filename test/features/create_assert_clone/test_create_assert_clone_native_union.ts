import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_native_union = _test_assert_clone(
    "union native",
    NativeUnion.generate,
    TSON.createAssertClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);
