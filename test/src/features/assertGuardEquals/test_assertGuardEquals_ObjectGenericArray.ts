import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectGenericArray =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.assertGuardEquals<ObjectGenericArray>(input),
  );
