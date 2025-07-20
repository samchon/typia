import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_assertCloneCustom_ObjectUndefined = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectUndefined")<ObjectUndefined>(
    ObjectUndefined,
  )((input) =>
    typia.misc.assertClone<ObjectUndefined>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
