import typia from "../../../src";

import { AtomicClass } from "../../structures/AtomicClass";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_AtomicClass = _test_assertEquals(
    "AtomicClass",
    AtomicClass.generate,
    typia.createAssertEquals<AtomicClass>(),
);
