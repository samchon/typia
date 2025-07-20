import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_validateParametersAsync_ObjectNullable =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectNullable")(ObjectNullable)(
      (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
        typia.functional.validateParameters(p),
    );
