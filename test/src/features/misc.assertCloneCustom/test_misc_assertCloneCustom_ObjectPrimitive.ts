import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectPrimitive = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)((input) => typia.misc.assertClone<ObjectPrimitive>(input, (p) => new CustomGuardError(p)));
