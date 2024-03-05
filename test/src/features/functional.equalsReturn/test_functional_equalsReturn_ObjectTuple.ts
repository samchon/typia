import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsReturn_ObjectTuple =
  _test_functional_equalsReturn("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.equalsReturn(p),
  );
