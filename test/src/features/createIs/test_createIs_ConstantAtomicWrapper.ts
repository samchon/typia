import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_createIs_ConstantAtomicWrapper = (): void => _test_is(
    "ConstantAtomicWrapper",
)<ConstantAtomicWrapper>(
    ConstantAtomicWrapper
)(typia.createIs<ConstantAtomicWrapper>());
