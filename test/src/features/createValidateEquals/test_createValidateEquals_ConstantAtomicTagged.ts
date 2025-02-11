import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createValidateEquals_ConstantAtomicTagged = _test_validateEquals(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.createValidateEquals<ConstantAtomicTagged>());
