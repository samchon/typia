import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertGuardEqualsCustom_ObjectGeneric =
  _test_assertGuardEquals(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) =>
    typia.assertGuardEquals<ObjectGeneric>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
