import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssertGuard_DynamicUndefined = _test_assertGuard(
  "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)(
  typia.createAssertGuard<DynamicUndefined>(),
);
