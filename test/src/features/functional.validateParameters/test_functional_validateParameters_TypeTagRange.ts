import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_validateParameters_TypeTagRange = (): void =>
  _test_functional_validateParameters("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.validateParameters(p),
  );
