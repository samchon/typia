import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateParametersAsync_TypeTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("TypeTagTypeBigInt")(
      TypeTagTypeBigInt,
    )((p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.validateParameters(p),
    );
