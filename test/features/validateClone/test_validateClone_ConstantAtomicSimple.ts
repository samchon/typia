import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ConstantAtomicSimple = _test_validateClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validateClone(input),
    ConstantAtomicSimple.SPOILERS,
);