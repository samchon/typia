import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsFunction_TypeTagDefault =
  _test_functional_validateEqualsFunction("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.validateEqualsFunction(p),
  );
