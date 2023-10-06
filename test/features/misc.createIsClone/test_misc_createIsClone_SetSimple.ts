import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { SetSimple } from "../../structures/SetSimple";

export const test_misc_createIsClone_SetSimple = _test_misc_isClone(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.misc.createIsClone<SetSimple>());
