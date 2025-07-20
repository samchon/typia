import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsReturn_TypeTagTuple = (): void =>
  _test_functional_validateEqualsReturn("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.validateEqualsReturn(p),
  );
