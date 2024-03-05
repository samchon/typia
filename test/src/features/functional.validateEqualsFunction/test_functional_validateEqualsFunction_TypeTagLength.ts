import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsFunction_TypeTagLength =
  _test_functional_validateEqualsFunction("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateEqualsFunction(p),
  );
