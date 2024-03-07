import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateEqualsParametersAsync_TypeTagBigInt =
  _test_functional_validateEqualsParametersAsync("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.validateEqualsParameters(p),
  );
