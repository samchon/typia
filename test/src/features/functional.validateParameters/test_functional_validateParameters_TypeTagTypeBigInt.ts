import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateParameters_TypeTagTypeBigInt = (): void =>
  _test_functional_validateParameters("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.validateParameters(p),
  );
