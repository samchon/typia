import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsFunction_ObjectInternal =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsFunction(p),
  );
