import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateEqualsParameters_TypeTagMatrix =
  _test_functional_validateEqualsParameters("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateEqualsParameters(p),
  );
