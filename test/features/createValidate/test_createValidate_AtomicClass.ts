import typia from "typia";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_AtomicClass = _test_validate(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidate<AtomicClass>(),
    AtomicClass.SPOILERS,
);
