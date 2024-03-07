import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsFunctionAsync_ObjectTuple =
  _test_functional_equalsFunctionAsync("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.equalsFunction(p),
  );
