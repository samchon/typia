import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectGenericArray = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.misc.assertClone<ObjectGenericArray>(input, (p) => new CustomGuardError(p)));
