import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createAssertGuard_DynamicJsonValue = _test_assertGuard(
  "DynamicJsonValue",
)<DynamicJsonValue>(DynamicJsonValue)(
  typia.createAssertGuard<DynamicJsonValue>(),
);
