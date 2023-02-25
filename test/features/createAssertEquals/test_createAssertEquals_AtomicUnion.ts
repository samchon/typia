import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_AtomicUnion = _test_assertEquals(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createAssertEquals<AtomicUnion>(),
);
