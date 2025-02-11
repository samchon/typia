import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertGuardEqualsCustom_ObjectOptional =
  _test_assertGuardEquals(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    typia.assertGuardEquals<ObjectOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
