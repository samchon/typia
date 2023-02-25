import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_AtomicClass = _test_equals(
    "AtomicClass",
    AtomicClass.generate,
    typia.createEquals<AtomicClass>(),
);
