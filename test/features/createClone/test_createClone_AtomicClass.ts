import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createClone_AtomicClass = _test_clone(
    "AtomicClass",
    AtomicClass.generate,
    typia.createClone<AtomicClass>(),
);
