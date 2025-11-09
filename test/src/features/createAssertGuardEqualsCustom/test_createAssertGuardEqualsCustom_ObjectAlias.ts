import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertGuardEqualsCustom_ObjectAlias = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )(typia.createAssertGuardEquals<ObjectAlias>((p) => new CustomGuardError(p)));
