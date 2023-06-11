import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createValidate_ConstantAtomicSimple = _test_validate(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    typia.createValidate<ConstantAtomicSimple>(),
    ConstantAtomicSimple.SPOILERS,
);
