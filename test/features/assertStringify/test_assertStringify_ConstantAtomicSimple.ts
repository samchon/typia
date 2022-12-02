import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ConstantAtomicSimple = _test_assertStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.assertStringify(input),
    ConstantAtomicSimple.SPOILERS,
);
