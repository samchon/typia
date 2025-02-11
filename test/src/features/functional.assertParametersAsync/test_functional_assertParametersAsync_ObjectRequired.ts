import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_assertParametersAsync_ObjectRequired =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.assertParameters(p),
  );
