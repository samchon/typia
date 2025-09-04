import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertReturn_DynamicUndefined = (): void =>
  _test_functional_assertReturn(TypeGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertReturn(p),
  );
