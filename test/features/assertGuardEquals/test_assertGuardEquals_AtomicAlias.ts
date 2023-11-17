import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertGuardEquals_AtomicAlias = _test_assertGuardEquals(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
  typia.assertGuardEquals<AtomicAlias>(input),
);
