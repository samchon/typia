import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_validateEqualsFunction_TypeTagTypeUnion =
  _test_functional_validateEqualsFunction("TypeTagTypeUnion")(TypeTagTypeUnion)(
    (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
      typia.functional.validateEqualsFunction(p),
  );
