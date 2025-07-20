import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateEqualsParametersAsync_TypeTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("TypeTagTypeBigInt")(
      TypeTagTypeBigInt,
    )((p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.validateEqualsParameters(p),
    );
