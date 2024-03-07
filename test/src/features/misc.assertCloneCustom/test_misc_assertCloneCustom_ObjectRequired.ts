import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ObjectRequired =
  _test_misc_assertClone(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) =>
    typia.misc.assertClone<ObjectRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
