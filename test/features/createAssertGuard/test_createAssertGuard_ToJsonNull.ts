import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createAssertGuard_ToJsonNull = _test_assertGuard(
    "ToJsonNull",
)<ToJsonNull>(ToJsonNull)(typia.createAssertGuard<ToJsonNull>());
