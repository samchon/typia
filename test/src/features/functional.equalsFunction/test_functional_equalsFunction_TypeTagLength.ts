import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsFunction_TypeTagLength = (): void =>
  _test_functional_equalsFunction("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.equalsFunction(p),
  );
