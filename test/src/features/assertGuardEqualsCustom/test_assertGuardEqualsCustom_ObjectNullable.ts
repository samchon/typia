import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectNullable = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.assertGuardEquals<ObjectNullable>(input, (p) => new CustomGuardError(p)));
