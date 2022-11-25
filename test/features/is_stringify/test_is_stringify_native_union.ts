import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_native_union = _test_is_stringify(
    "union native",
    NativeUnion.generate,
    (input) => TSON.isStringify(input),
    NativeUnion.SPOILERS,
);
