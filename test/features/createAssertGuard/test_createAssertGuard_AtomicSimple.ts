import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createAssertGuard_AtomicSimple = _test_assertGuard(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.createAssertGuard<AtomicSimple>());
