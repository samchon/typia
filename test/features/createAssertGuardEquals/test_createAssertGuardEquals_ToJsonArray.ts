import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertGuardEquals_ToJsonArray = _test_assertGuardEquals(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.createAssertGuardEquals<ToJsonArray>());
