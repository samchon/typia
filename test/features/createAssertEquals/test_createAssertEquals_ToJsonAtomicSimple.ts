import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_assertEquals_ToJsonAtomicSimple = _test_assertEquals(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    typia.createAssertEquals<ToJsonAtomicSimple>(),
);
