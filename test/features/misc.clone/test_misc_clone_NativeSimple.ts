import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_misc_clone_NativeSimple = _test_misc_clone<NativeSimple>(
    NativeSimple,
)((input) => typia.misc.clone<NativeSimple>(input));
