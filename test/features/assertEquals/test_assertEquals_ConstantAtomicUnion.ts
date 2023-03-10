import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertEquals_ConstantAtomicUnion = _test_assertEquals(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assertEquals(input),
);
