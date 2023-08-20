import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_validateClone_ConstantAtomicUnion = _test_validateClone(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.validateClone<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
