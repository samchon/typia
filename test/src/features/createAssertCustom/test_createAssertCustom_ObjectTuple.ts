import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectTuple = (): void => _test_assert(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createAssert<ObjectTuple>((p) => new CustomGuardError(p)));
