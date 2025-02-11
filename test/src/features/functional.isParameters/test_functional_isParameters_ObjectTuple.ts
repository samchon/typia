import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isParameters_ObjectTuple =
  _test_functional_isParameters("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.isParameters(p),
  );
