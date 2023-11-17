import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertGuardEquals_ToJsonNull = _test_assertGuardEquals(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(typia.createAssertGuardEquals<ToJsonNull>());
