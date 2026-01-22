import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertGuardEqualsCustom_ObjectHttpNullable = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)(
    typia.createAssertGuardEquals<ObjectHttpNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
