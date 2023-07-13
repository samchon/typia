import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_validate_AtomicClass = _test_validate(
    "AtomicClass",
    AtomicClass.generate,
    typia.createValidate<AtomicClass>(),
    AtomicClass.SPOILERS,
);
