import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_native_union = _test_equals(
    "union native",
    NativeUnion.generate,
    TSON.createEquals<NativeUnion>(),
);
