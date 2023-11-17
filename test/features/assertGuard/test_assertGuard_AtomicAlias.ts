import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_assertGuard_AtomicAlias = _test_assertGuard(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) => typia.assertGuard<AtomicAlias>(input));
