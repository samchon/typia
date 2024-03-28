import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsParameters_ObjectInternal =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsParameters(p),
  );
