import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectPropertyNullable = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((input) => typia.assertGuard<ObjectPropertyNullable>(input, (p) => new CustomGuardError(p)));
