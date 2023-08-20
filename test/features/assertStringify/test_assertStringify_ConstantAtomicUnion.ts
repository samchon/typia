import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_assertStringify_ConstantAtomicUnion = _test_assertStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => typia.assertStringify<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);
