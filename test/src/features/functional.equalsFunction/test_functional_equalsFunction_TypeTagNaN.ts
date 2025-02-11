import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsFunction_TypeTagNaN =
  _test_functional_equalsFunction("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.equalsFunction(p),
  );
