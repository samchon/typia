import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_misc_createIsClone_NativeSimple = _test_misc_isClone(
    "NativeSimple",
)<NativeSimple>(NativeSimple)(typia.misc.createIsClone<NativeSimple>());
