import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_equalsReturn_TypeTagTuple =
  _test_functional_equalsReturn("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.equalsReturn(p),
  );
