import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ConstantAtomicUnion = _test_assertStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    TSON.createAssertStringify<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);