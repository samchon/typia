import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertGuardEquals_AtomicClass = _test_assertGuardEquals(
    "AtomicClass",
)<AtomicClass>(AtomicClass)((input) =>
    typia.assertGuardEquals<AtomicClass>(input),
);
