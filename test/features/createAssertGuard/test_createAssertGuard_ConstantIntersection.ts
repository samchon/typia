import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertGuard_ConstantIntersection = _test_assertGuard(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  typia.createAssertGuard<ConstantIntersection>(),
);
