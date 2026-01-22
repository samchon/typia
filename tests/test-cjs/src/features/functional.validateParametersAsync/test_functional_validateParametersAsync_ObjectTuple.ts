import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateParametersAsync_ObjectTuple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectTuple")(ObjectTuple)(
      (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
        typia.functional.validateParameters(p),
    );
