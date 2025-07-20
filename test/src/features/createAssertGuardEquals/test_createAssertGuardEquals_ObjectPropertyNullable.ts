import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertGuardEquals_ObjectPropertyNullable = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    typia.createAssertGuardEquals<ObjectPropertyNullable>(),
  );
