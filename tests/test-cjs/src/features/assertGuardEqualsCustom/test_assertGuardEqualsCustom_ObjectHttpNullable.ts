import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuardEqualsCustom_ObjectHttpNullable = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.assertGuardEquals<ObjectHttpNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
