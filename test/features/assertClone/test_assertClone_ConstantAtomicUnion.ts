import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertClone_ConstantAtomicUnion = _test_assertClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assertClone<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
