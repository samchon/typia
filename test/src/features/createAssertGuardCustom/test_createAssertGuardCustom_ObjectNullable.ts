import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectNullable = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createAssertGuard<ObjectNullable>((p) => new CustomGuardError(p)));
