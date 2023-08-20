import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validateClone_ConstantAtomicSimple = _test_validateClone(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validateClone<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
