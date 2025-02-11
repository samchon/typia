import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsFunction_ObjectTuple =
  _test_functional_equalsFunction("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.equalsFunction(p),
  );
