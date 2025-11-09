import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectGenericArray = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.assertPrune<ObjectGenericArray>(input, (p) => new CustomGuardError(p)));
