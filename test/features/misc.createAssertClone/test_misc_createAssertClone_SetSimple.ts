import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_misc_createAssertClone_SetSimple = _test_misc_assertClone(
    "SetSimple",
)<SetSimple>(SetSimple)(typia.misc.createAssertClone<SetSimple>());
