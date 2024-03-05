import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsReturn_TypeTagPattern =
  _test_functional_validateEqualsReturn("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => TypeTagPattern) =>
      typia.functional.validateEqualsReturn(p),
  );
