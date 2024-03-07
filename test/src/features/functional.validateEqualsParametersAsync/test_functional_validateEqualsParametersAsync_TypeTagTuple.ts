import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateEqualsParametersAsync_TypeTagTuple =
  _test_functional_validateEqualsParametersAsync("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.validateEqualsParameters(p),
  );
