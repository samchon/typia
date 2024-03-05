import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_functional_equalsReturn_TypeTagLength =
  _test_functional_equalsReturn("TypeTagLength")(TypeTagLength)(
    (p: (input: TypeTagLength) => TypeTagLength) =>
      typia.functional.equalsReturn(p),
  );
