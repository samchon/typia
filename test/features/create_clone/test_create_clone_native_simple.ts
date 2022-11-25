import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_native_simple = _test_clone(
    "simple native",
    NativeSimple.generate,
    TSON.createClone<NativeSimple>(),
);
