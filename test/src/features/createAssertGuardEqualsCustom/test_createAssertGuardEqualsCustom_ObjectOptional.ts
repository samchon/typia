import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertGuardEqualsCustom_ObjectOptional = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(
    typia.createAssertGuardEquals<ObjectOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
