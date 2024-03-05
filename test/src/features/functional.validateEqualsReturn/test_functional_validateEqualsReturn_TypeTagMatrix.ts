import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateEqualsReturn_TypeTagMatrix =
  _test_functional_validateEqualsReturn("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateEqualsReturn(p),
  );
