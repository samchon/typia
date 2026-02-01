import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_validate_ConstantAtomicTagged = (): void => _test_validate(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.validate<ConstantAtomicTagged>(input));
