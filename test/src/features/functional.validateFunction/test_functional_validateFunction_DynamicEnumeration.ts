import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateFunction_DynamicEnumeration = (): void =>
  _test_functional_validateFunction("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      typia.functional.validateFunction(p),
  );
