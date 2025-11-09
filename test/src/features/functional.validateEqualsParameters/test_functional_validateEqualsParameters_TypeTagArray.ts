import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsParameters_TypeTagArray = (): void =>
  _test_functional_validateEqualsParameters("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.validateEqualsParameters(p),
  );
