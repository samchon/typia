import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_createAssertGuard_AtomicAlias = _test_assertGuard(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)(typia.createAssertGuard<AtomicAlias>());
