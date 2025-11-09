import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsReturn_TypeTagLength = (): void =>
  _test_functional_validateEqualsReturn("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateEqualsReturn(p),
  );
