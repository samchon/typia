import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssertEquals_AtomicClass = _test_assertEquals(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createAssertEquals<AtomicClass>());
