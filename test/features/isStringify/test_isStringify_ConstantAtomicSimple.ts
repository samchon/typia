import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ConstantAtomicSimple = _test_isStringify(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => TSON.isStringify(input),
    ConstantAtomicSimple.SPOILERS,
);