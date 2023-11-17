import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertGuard_ToJsonArray = _test_assertGuard(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)(typia.createAssertGuard<ToJsonArray>());
