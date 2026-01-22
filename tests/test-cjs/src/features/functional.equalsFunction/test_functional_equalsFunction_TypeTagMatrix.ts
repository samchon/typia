import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_functional_equalsFunction_TypeTagMatrix = (): void =>
  _test_functional_equalsFunction("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      typia.functional.equalsFunction(p),
  );
