import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_isClone_ConstantAtomicUnion = _test_isClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isClone(input),
    ConstantAtomicUnion.SPOILERS,
);
