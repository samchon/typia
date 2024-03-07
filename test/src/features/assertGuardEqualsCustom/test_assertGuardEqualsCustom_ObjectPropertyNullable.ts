import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ObjectPropertyNullable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.assertGuardEquals<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
