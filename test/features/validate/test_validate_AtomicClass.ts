import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_AtomicClass = _test_validate(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.validate(input),
    AtomicClass.SPOILERS,
);
