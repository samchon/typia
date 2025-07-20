import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_createAssertCloneCustom_ObjectUndefined = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )(
    typia.misc.createAssertClone<ObjectUndefined>(
      (p) => new CustomGuardError(p),
    ),
  );
