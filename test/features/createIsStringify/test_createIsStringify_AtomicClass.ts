import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_AtomicClass = _test_isStringify(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIsStringify<AtomicClass>(),
    AtomicClass.SPOILERS,
);
