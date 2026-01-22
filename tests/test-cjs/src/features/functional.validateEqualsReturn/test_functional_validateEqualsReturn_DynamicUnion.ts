import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateEqualsReturn_DynamicUnion = (): void =>
  _test_functional_validateEqualsReturn("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.validateEqualsReturn(p),
  );
