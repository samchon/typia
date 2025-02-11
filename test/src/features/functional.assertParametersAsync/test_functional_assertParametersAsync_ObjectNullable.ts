import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertParametersAsync_ObjectNullable =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectNullable")(
    ObjectNullable,
  )((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.assertParameters(p),
  );
