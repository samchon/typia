import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsParametersAsync_TypeTagFormat =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagFormat")(
      TypeTagFormat,
    )((p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
      typia.functional.validateEqualsParameters(p),
    );
