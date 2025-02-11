import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { SetSimple } from "../../structures/SetSimple";

export const test_createIs_SetSimple = _test_is(
    "SetSimple",
)<SetSimple>(
    SetSimple
)(typia.createIs<SetSimple>());
