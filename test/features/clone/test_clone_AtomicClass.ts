import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_AtomicClass = _test_clone(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.clone(input),
);
