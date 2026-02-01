import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_validateEquals_ConstantAtomicTagged = (): void => _test_validateEquals(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.validateEquals<ConstantAtomicTagged>(input));
