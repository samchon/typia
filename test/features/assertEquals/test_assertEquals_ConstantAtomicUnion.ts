import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ConstantAtomicUnion = _test_assertEquals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assertEquals(input),
);
