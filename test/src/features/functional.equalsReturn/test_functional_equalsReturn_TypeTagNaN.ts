import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_equalsReturn_TypeTagNaN =
  _test_functional_equalsReturn("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) => typia.functional.equalsReturn(p),
  );
