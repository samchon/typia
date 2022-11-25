import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_native_union = _test_is_clone(
    "union native",
    NativeUnion.generate,
    TSON.createIsClone<NativeUnion>(),
    NativeUnion.SPOILERS,
);
