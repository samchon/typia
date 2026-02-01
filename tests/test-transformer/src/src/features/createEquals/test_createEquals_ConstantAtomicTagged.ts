import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_createEquals_ConstantAtomicTagged = (): void => _test_equals(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)(typia.createEquals<ConstantAtomicTagged>());
