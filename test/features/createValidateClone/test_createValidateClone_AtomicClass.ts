import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createValidateClone_AtomicClass = _test_validateClone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateClone<AtomicClass>(),
    AtomicClass.SPOILERS,
);
