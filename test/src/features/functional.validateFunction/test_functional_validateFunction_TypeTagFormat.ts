import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateFunction_TypeTagFormat =
  _test_functional_validateFunction("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.validateFunction(p),
  );
