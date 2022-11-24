import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is } from "../internal/_test_is";

export const test_create_is_native_union = _test_is(
    "union native",
    NativeUnion.generate,
    TSON.createIs<NativeUnion>(),
    NativeUnion.SPOILERS,
);
