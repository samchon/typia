import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertParameters_DynamicUndefined = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertParameters(p),
  );
