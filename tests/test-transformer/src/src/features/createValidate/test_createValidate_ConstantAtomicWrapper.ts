import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createValidate_ConstantAtomicWrapper = (): void => _test_validate(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createValidate<ConstantAtomicWrapper>());
