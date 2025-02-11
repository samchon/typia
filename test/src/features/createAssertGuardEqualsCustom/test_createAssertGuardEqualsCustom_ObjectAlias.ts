import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectAlias = _test_assertGuardEquals(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.createAssertGuardEquals<ObjectAlias>((p) => new CustomGuardError(p)));
