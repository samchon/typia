import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsParameters_TypeTagTuple = (): void =>
  _test_functional_validateEqualsParameters("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.validateEqualsParameters(p),
  );
