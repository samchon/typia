import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createAssert_AtomicClass = _test_assert(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createAssert<AtomicClass>());
