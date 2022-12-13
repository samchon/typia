import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ConstantAtomicSimple = _test_assertStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createAssertStringify<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);