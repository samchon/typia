import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_createAssertCloneCustom_ObjectAlias = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )(typia.misc.createAssertClone<ObjectAlias>((p) => new CustomGuardError(p)));
