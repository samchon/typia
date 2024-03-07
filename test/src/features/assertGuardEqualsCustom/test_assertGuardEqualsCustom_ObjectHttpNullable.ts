import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectHttpNullable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectHttpNullable",
  )<ObjectHttpNullable>(ObjectHttpNullable)((input) =>
    typia.assertGuardEquals<ObjectHttpNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
