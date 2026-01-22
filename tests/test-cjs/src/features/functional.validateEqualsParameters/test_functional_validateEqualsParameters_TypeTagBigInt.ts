import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateEqualsParameters_TypeTagBigInt =
  (): void =>
    _test_functional_validateEqualsParameters("TypeTagBigInt")(TypeTagBigInt)(
      (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
        typia.functional.validateEqualsParameters(p),
    );
