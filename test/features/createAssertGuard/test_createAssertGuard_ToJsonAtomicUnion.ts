import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_createAssertGuard_ToJsonAtomicUnion = _test_assertGuard(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
  typia.createAssertGuard<ToJsonAtomicUnion>(),
);
