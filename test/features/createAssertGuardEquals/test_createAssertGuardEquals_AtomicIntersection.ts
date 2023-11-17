import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_createAssertGuardEquals_AtomicIntersection =
  _test_assertGuardEquals("AtomicIntersection")<AtomicIntersection>(
    AtomicIntersection,
  )(typia.createAssertGuardEquals<AtomicIntersection>());
