import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectPropertyNullable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.createAssertGuardEquals<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
