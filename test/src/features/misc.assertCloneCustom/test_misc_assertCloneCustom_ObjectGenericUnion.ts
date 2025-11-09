import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectGenericUnion = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.misc.assertClone<ObjectGenericUnion>(input, (p) => new CustomGuardError(p)));
