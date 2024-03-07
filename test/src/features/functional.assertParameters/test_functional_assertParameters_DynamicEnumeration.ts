import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_DynamicEnumeration =
  _test_functional_assertParameters(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertParameters(p),
  );
