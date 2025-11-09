import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectGeneric = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.misc.assertClone<ObjectGeneric>(input, (p) => new CustomGuardError(p)));
