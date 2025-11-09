import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectNullable = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)(typia.createAssertGuardEquals<ObjectNullable>((p) => new CustomGuardError(p)));
