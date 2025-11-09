import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_assertPruneCustom_ObjectNullable = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    typia.misc.assertPrune<ObjectNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
