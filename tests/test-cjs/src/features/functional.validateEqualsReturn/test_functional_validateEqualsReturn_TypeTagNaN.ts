import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateEqualsReturn_TypeTagNaN = (): void =>
  _test_functional_validateEqualsReturn("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.validateEqualsReturn(p),
  );
