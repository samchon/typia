import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsReturn_DynamicEnumeration = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertEqualsReturn(p),
  );
