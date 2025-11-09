import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsParameters_DynamicUnion = (): void =>
  _test_functional_validateEqualsParameters("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.validateEqualsParameters(p),
  );
