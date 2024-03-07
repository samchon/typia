import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateParametersAsync_TypeTagPattern =
  _test_functional_validateParametersAsync("TypeTagPattern")(TypeTagPattern)(
    (p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.validateParameters(p),
  );
