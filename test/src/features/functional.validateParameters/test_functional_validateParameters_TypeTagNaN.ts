import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_validateParameters_TypeTagNaN = (): void =>
  _test_functional_validateParameters("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.validateParameters(p),
  );
