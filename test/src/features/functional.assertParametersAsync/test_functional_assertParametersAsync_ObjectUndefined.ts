import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectUndefined =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.assertParameters(p),
  );
