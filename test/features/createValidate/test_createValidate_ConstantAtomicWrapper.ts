import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_validate_ConstantAtomicWrapper = _test_validate(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
    typia.createValidate<ConstantAtomicWrapper>(),
);
