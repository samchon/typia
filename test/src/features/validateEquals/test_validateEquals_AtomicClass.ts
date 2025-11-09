import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validateEquals_AtomicClass = (): void => _test_validateEquals(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.validateEquals<AtomicClass>(input));
