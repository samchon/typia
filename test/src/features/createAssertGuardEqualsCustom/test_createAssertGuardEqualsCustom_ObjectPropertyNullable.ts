import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertGuardEqualsCustom_ObjectPropertyNullable =
  _test_assertGuardEquals(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.createAssertGuardEquals<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
