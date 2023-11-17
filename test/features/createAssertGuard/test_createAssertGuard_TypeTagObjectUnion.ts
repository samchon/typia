import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertGuard_TypeTagObjectUnion = _test_assertGuard(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
  typia.createAssertGuard<TypeTagObjectUnion>(),
);
