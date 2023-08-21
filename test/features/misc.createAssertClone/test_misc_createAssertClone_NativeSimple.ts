import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_misc_assertClone_NativeSimple = _test_misc_assertClone(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.misc.createAssertClone<NativeSimple>());
