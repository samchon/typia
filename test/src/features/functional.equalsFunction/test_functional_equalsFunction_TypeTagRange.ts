import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_equalsFunction_TypeTagRange =
  _test_functional_equalsFunction("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.equalsFunction(p),
  );
