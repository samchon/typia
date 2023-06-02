import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_random } from "../../internal/_test_random";

export const test_random_AtomicClass = _test_random(
    "AtomicClass",
    () => typia.random<AtomicClass>(),
typia.createAssert<typia.Primitive<AtomicClass>>(),
);
