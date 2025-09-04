import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_assertCloneCustom_ObjectRequired = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) =>
    typia.misc.assertClone<ObjectRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
