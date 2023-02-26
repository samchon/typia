import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createIsClone_AtomicClass = _test_isClone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIsClone<AtomicClass>(),
    AtomicClass.SPOILERS,
);
