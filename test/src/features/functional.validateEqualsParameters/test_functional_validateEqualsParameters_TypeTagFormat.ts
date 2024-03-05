import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateEqualsParameters_TypeTagFormat =
  _test_functional_validateEqualsParameters("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.validateEqualsParameters(p),
  );
