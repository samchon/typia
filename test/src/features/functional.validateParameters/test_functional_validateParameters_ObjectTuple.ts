import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateParameters_ObjectTuple =
  _test_functional_validateParameters("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.validateParameters(p),
  );
