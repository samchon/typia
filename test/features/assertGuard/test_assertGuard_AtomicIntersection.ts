import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_assertGuard_AtomicIntersection = _test_assertGuard(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  typia.assertGuard<AtomicIntersection>(input),
);
