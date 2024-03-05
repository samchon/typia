import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateFunction_TypeTagRange =
  _test_functional_validateFunction("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.validateFunction(p),
  );
