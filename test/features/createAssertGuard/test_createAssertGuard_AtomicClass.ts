import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertGuard_AtomicClass = _test_assertGuard(
    "AtomicClass",
)<AtomicClass>(AtomicClass)(typia.createAssertGuard<AtomicClass>());
