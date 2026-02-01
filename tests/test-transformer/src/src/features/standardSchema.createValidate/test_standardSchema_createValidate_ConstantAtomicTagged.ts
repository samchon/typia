import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_standardSchema_createValidate_ConstantAtomicTagged = (): void => _test_standardSchema_validate(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.createValidate<ConstantAtomicTagged>());
