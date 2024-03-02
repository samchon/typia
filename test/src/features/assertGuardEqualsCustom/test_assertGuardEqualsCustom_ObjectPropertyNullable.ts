import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertGuardEqualsCustom_ObjectPropertyNullable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.assertGuardEquals<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
