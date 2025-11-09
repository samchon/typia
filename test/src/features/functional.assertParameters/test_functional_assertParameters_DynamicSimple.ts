import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertParameters_DynamicSimple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("DynamicSimple")(
    DynamicSimple,
  )((p: (input: DynamicSimple) => DynamicSimple) =>
    typia.functional.assertParameters(p),
  );
