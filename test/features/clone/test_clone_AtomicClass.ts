import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_clone_AtomicClass = _test_clone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.clone(input),
);
