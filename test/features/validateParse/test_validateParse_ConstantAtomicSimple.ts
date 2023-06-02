import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_validateParse_ConstantAtomicSimple = _test_validateParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => typia.validateParse<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);
