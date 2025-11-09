import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectHttpNullable = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)((input) => typia.misc.assertPrune<ObjectHttpNullable>(input, (p) => new CustomGuardError(p)));
