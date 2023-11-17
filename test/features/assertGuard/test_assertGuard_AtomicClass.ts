import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_assertGuard_AtomicClass = _test_assertGuard(
    "AtomicClass",
)<AtomicClass>(AtomicClass)((input) => typia.assertGuard<AtomicClass>(input));
