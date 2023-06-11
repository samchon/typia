import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidateStringify_AtomicClass = _test_validateStringify(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateStringify<AtomicClass>(),
    AtomicClass.SPOILERS,
);
