import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateParameters_TypeTagLength =
  _test_functional_validateParameters("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateParameters(p),
  );
