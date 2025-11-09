import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_assertReturn_DynamicSimple = (): void =>
  _test_functional_assertReturn(TypeGuardError)("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => DynamicSimple) =>
      typia.functional.assertReturn(p),
  );
