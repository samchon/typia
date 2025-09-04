import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsParametersAsync_ObjectTuple =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectTuple")(ObjectTuple)(
      (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
        typia.functional.validateEqualsParameters(p),
    );
