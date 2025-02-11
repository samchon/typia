import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertParameters_ObjectInternal =
  _test_functional_assertParameters(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertParameters(p),
  );
