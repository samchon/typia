import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertGuardEquals_ObjectUnionDouble = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.assertGuardEquals<ObjectUnionDouble>(input),
  );
