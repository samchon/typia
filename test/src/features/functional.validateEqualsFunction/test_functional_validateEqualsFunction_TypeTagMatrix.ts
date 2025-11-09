import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_validateEqualsFunction_TypeTagMatrix = (): void =>
  _test_functional_validateEqualsFunction("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.validateEqualsFunction(p),
  );
