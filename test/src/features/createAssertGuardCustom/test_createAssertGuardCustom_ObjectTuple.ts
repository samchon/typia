import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectTuple = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createAssertGuard<ObjectTuple>((p) => new CustomGuardError(p)));
