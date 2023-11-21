import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertGuard_FunctionalObjectUnion = _test_assertGuard(
  "FunctionalObjectUnion",
)<FunctionalObjectUnion>(FunctionalObjectUnion)(
  typia.createAssertGuard<FunctionalObjectUnion>(),
);
