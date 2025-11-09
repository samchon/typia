import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectUnionImplicit = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.assertGuardEquals<ObjectUnionImplicit>(input, (p) => new CustomGuardError(p)));
