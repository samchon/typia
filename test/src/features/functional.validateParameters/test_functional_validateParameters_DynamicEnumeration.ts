import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateParameters_DynamicEnumeration = (): void =>
  _test_functional_validateParameters("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      typia.functional.validateParameters(p),
  );
