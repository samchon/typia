import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validate_AtomicClass = (): void => _test_validate(
    "AtomicClass",
)<AtomicClass>(
    AtomicClass
)((input) => typia.validate<AtomicClass>(input));
