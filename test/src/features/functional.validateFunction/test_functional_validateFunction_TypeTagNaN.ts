import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateFunction_TypeTagNaN =
  _test_functional_validateFunction("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.validateFunction(p),
  );
