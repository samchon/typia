import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_NativeSimple = _test_clone(
    "NativeSimple",
    NativeSimple.generate,
    typia.createClone<NativeSimple>(),
);
