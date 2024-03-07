import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectInternal =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.assertParameters(p),
  );
