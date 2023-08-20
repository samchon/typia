import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_isStringify_ConstantAtomicUnion = _test_isStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.isStringify<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
