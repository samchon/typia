import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateParametersAsync_TypeTagBigInt =
  _test_functional_validateParametersAsync("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.validateParameters(p),
  );
