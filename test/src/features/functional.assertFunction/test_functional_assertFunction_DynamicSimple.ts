import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertFunction_DynamicSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => DynamicSimple) =>
    typia.functional.assertFunction(p),
  );
