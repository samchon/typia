import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectHttpAtomic = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.misc.assertPrune<ObjectHttpAtomic>(input, (p) => new CustomGuardError(p)));
