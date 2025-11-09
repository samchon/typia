import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectDynamic = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.misc.assertClone<ObjectDynamic>(input, (p) => new CustomGuardError(p)));
