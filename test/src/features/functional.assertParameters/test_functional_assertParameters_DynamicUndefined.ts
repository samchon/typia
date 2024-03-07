import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_DynamicUndefined =
  _test_functional_assertParameters(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertParameters(p),
  );
