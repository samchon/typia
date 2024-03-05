import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateEqualsParameters_TypeTagRange =
  _test_functional_validateEqualsParameters("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.validateEqualsParameters(p),
  );
