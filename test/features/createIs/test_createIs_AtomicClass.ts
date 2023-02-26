import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_is } from "../internal/_test_is";

export const test_createIs_AtomicClass = _test_is(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIs<AtomicClass>(),
    AtomicClass.SPOILERS,
);
