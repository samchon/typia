import TSON from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_NativeSimple = _test_clone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => TSON.clone(input),
);