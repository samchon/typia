import typia from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ConstantAtomicSimple = _test_validateParse(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createValidateParse<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);