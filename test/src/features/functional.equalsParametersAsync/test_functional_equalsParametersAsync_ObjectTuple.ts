import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsParametersAsync_ObjectTuple =
  _test_functional_equalsParametersAsync("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.equalsParameters(p),
  );
