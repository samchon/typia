import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectAlias = (): void => _test_assertGuardEquals(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.assertGuardEquals<ObjectAlias>(input, (p) => new CustomGuardError(p)));
