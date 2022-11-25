import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_native_union = _test_is(
    "union native",
    NativeUnion.generate,
    (input) => TSON.is(input),
    NativeUnion.SPOILERS,
);
