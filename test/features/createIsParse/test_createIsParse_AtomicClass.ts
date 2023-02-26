import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createIsParse_AtomicClass = _test_isParse(
    "AtomicClass",
    AtomicClass.generate,
    typia.createIsParse<AtomicClass>(),
    AtomicClass.SPOILERS,
);
