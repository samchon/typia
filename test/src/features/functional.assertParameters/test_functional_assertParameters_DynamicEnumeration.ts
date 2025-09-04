import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertParameters_DynamicEnumeration = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertParameters(p),
  );
