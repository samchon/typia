import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_validateFunction_TypeTagLength = (): void =>
  _test_functional_validateFunction("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.validateFunction(p),
  );
