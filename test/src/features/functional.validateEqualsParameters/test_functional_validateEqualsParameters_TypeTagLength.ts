import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateEqualsParameters_TypeTagLength =
  _test_functional_validateEqualsParameters("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateEqualsParameters(p),
  );
