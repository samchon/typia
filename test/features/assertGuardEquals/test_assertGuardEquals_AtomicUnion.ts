import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_assertGuardEquals_AtomicUnion = _test_assertGuardEquals(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  typia.assertGuardEquals<AtomicUnion>(input),
);
