import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectPrimitive = (): void => _test_misc_assertClone(CustomGuardError)(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)(typia.misc.createAssertClone<ObjectPrimitive>((p) => new CustomGuardError(p)));
