import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ObjectAlias =
  _test_misc_assertClone(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )(typia.misc.createAssertClone<ObjectAlias>((p) => new CustomGuardError(p)));
