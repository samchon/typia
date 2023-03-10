import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_assertEquals_ToJsonAtomicUnion = _test_assertEquals(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => typia.assertEquals(input),
);
