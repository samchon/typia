import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsParametersAsync_TypeTagRange =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagRange")(
      TypeTagRange,
    )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
      typia.functional.validateEqualsParameters(p),
    );
