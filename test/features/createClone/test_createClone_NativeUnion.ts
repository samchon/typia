import TSON from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_NativeUnion = _test_clone(
    "NativeUnion",
    NativeUnion.generate,
    TSON.createClone<NativeUnion>(),
);
