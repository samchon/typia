import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_clone_NativeSimple = _test_clone(
    "NativeSimple",
    NativeSimple.generate,
    (input) => typia.clone(input),
);
