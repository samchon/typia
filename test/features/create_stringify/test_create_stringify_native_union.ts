import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_native_union = _test_stringify(
    "union native",
    NativeUnion.generate,
    TSON.createStringify<NativeUnion>(),
);
