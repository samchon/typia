import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertGuard_FunctionalArrayUnion = _test_assertGuard(
  "FunctionalArrayUnion",
)<FunctionalArrayUnion>(FunctionalArrayUnion)(
  typia.createAssertGuard<FunctionalArrayUnion>(),
);
