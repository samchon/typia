import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertGuardEqualsCustom_ObjectGeneric = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )(
    typia.createAssertGuardEquals<ObjectGeneric>(
      (p) => new CustomGuardError(p),
    ),
  );
