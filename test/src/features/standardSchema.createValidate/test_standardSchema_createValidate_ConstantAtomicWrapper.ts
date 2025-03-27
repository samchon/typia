import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_standardSchema_createValidate_ConstantAtomicWrapper = _test_standardSchema_validate(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createValidate<ConstantAtomicWrapper>());
