import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_misc_prune_ConstantAtomicTagged = (): void => _test_misc_prune(
    "ConstantAtomicTagged",
)<ConstantAtomicTagged>(
    ConstantAtomicTagged
)((input) => typia.misc.prune<ConstantAtomicTagged>(input));
