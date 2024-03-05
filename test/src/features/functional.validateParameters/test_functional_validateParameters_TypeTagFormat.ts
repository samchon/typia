import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_validateParameters_TypeTagFormat =
  _test_functional_validateParameters("TypeTagFormat")(TypeTagFormat)(
    (p: (input: TypeTagFormat) => TypeTagFormat) =>
      typia.functional.validateParameters(p),
  );
