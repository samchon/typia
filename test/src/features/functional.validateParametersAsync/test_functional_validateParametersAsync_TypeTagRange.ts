import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateParametersAsync_TypeTagRange =
  _test_functional_validateParametersAsync("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.validateParameters(p),
  );
