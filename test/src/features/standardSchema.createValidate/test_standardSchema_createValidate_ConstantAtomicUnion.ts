import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_standardSchema_createValidate_ConstantAtomicUnion = _test_standardSchema_validate(
    "ConstantAtomicUnion",
)<ConstantAtomicUnion>(
    ConstantAtomicUnion
)(typia.createValidate<ConstantAtomicUnion>());
