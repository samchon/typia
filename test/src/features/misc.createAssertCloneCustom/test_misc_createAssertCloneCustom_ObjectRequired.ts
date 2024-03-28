import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createAssertCloneCustom_ObjectRequired =
  _test_misc_assertClone(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(
    typia.misc.createAssertClone<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
