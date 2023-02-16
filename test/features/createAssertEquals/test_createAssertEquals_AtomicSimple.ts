import typia from "typia";

import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_AtomicSimple = _test_assertEquals(
    "AtomicSimple",
    AtomicSimple.generate,
    typia.createAssertEquals<AtomicSimple>(),
);
