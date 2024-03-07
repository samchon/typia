import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectPropertyNullable =
  _test_assertGuard(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.createAssertGuard<ObjectPropertyNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
