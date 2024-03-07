import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_DynamicEnumeration =
  _test_functional_assertReturn(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertReturn(p),
  );
