import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createEquals_AtomicClass = _test_equals(
    "AtomicClass",
    AtomicClass.generate,
    typia.createEquals<AtomicClass>(),
);
