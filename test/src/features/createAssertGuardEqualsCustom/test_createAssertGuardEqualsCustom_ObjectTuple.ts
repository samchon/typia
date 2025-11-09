import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectTuple = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createAssertGuardEquals<ObjectTuple>((p) => new CustomGuardError(p)));
