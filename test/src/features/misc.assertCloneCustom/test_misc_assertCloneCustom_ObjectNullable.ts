import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_assertCloneCustom_ObjectNullable = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    typia.misc.assertClone<ObjectNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
