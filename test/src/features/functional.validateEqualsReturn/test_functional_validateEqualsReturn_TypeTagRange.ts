import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsReturn_TypeTagRange = (): void =>
  _test_functional_validateEqualsReturn("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.validateEqualsReturn(p),
  );
