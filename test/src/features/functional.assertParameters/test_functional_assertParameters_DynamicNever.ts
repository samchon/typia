import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertParameters_DynamicNever =
  _test_functional_assertParameters(TypeGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => DynamicNever) =>
    typia.functional.assertParameters(p),
  );
