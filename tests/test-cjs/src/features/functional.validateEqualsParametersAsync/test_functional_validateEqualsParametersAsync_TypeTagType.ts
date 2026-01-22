import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsParametersAsync_TypeTagType =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagType")(TypeTagType)(
      (p: (input: TypeTagType) => Promise<TypeTagType>) =>
        typia.functional.validateEqualsParameters(p),
    );
