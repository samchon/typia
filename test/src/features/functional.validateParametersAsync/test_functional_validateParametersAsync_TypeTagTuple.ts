import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_validateParametersAsync_TypeTagTuple =
  _test_functional_validateParametersAsync("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.validateParameters(p),
  );
