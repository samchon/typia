import typia from "../../../src";
import { AtomicClass } from "../../structures/AtomicClass";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_AtomicClass = _test_isParse(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.isParse<AtomicClass>(input),
    AtomicClass.SPOILERS,
);
