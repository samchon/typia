import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_native_union = _test_clone(
    "union native",
    NativeUnion.generate,
    TSON.createClone<NativeUnion>(),
);
