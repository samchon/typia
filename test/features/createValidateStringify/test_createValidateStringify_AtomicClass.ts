import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_AtomicClass = _test_validateStringify(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateStringify<AtomicClass>(),
    AtomicClass.SPOILERS,
);
