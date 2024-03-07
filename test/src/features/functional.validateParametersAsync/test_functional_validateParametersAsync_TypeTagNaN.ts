import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateParametersAsync_TypeTagNaN =
  _test_functional_validateParametersAsync("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
      typia.functional.validateParameters(p),
  );
