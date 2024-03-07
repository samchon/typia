import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateFunctionAsync_ObjectTuple =
  _test_functional_validateFunctionAsync("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.validateFunction(p),
  );
