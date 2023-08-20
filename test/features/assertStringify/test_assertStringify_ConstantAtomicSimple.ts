import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_assertStringify_ConstantAtomicSimple = _test_assertStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.assertStringify<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
