import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidateEquals_AtomicClass = _test_validateEquals(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)(typia.createValidateEquals<AtomicClass>());
