import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectNullable } from "../../structures/ObjectNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectNullable = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.assertGuard<ObjectNullable>(input, (p) => new CustomGuardError(p)));
