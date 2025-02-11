import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsFunction_TypeTagRange =
  _test_functional_validateEqualsFunction("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.validateEqualsFunction(p),
  );
