import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_validateEqualsParametersAsync_TypeTagCustom =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagCustom")(
      TypeTagCustom,
    )((p: (input: TypeTagCustom) => Promise<TypeTagCustom>) =>
      typia.functional.validateEqualsParameters(p),
    );
