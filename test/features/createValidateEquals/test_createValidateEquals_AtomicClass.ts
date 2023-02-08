import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_AtomicClass = _test_validateEquals(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidateEquals<AtomicClass>(),
);