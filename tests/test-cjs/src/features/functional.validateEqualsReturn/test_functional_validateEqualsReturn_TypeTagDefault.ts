import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_validateEqualsReturn_TypeTagDefault = (): void =>
  _test_functional_validateEqualsReturn("TypeTagDefault")(TypeTagDefault)(
    (p: (input: TypeTagDefault) => TypeTagDefault) =>
      typia.functional.validateEqualsReturn(p),
  );
