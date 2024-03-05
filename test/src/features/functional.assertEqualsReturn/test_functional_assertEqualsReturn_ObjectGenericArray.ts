import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertEqualsReturn_ObjectGenericArray =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertEqualsReturn(p),
  );
