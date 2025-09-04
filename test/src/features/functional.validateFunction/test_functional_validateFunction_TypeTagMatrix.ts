import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateFunction_TypeTagMatrix = (): void =>
  _test_functional_validateFunction("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateFunction(p),
  );
