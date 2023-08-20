import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assert_ConstantAtomicUnion = _test_assert(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assert<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
