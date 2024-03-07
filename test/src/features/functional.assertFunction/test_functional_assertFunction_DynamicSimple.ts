import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_DynamicSimple =
  _test_functional_assertFunction(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => DynamicSimple) =>
    typia.functional.assertFunction(p),
  );
