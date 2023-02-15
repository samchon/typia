import typia from "typia";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_AtomicClass = _test_clone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createClone<AtomicClass>(),
);
