import typia from "../../../src";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonAtomicSimple = _test_assertEquals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createAssertEquals<ToJsonAtomicSimple>(),
);
