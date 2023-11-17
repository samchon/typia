import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertGuard_DynamicUnion = _test_assertGuard(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.createAssertGuard<DynamicUnion>());
