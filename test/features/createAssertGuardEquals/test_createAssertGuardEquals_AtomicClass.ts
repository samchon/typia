import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertGuardEquals_AtomicClass = _test_assertGuardEquals(
    "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.createAssertGuardEquals<AtomicClass>());
