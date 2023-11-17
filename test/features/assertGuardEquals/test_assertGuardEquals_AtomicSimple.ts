import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_assertGuardEquals_AtomicSimple = _test_assertGuardEquals(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
    typia.assertGuardEquals<AtomicSimple>(input),
);
