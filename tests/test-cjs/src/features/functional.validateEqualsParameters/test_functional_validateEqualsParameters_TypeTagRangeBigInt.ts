import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateEqualsParameters_TypeTagRangeBigInt =
  (): void =>
    _test_functional_validateEqualsParameters("TypeTagRangeBigInt")(
      TypeTagRangeBigInt,
    )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.validateEqualsParameters(p),
    );
