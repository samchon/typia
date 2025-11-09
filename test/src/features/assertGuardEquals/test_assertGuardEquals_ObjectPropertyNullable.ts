import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertGuardEquals_ObjectPropertyNullable = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)((input) =>
    typia.assertGuardEquals<ObjectPropertyNullable>(input),
  );
