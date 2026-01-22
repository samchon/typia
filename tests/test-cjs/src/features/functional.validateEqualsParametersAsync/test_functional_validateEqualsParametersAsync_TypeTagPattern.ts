import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_functional_validateEqualsParametersAsync_TypeTagPattern =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagPattern")(
      TypeTagPattern,
    )((p: (input: TypeTagPattern) => Promise<TypeTagPattern>) =>
      typia.functional.validateEqualsParameters(p),
    );
