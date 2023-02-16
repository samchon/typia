import typia from "typia";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_AtomicClass = _test_stringify(
    "AtomicClass",
    AtomicClass.generate,
    typia.createStringify<AtomicClass>(),
);
