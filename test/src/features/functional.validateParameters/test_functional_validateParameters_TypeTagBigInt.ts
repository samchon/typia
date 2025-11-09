import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateParameters_TypeTagBigInt = (): void =>
  _test_functional_validateParameters("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.validateParameters(p),
  );
