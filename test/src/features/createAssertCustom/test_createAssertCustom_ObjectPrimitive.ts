import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectPrimitive = (): void => _test_assert(CustomGuardError)(
    "ObjectPrimitive",
)<ObjectPrimitive>(
    ObjectPrimitive
)(typia.createAssert<ObjectPrimitive>((p) => new CustomGuardError(p)));
