import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createIs_AtomicClass = _test_is(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createIs<AtomicClass>());
