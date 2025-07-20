import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_isParametersAsync_ObjectNullable =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectNullable")(ObjectNullable)(
      (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
        typia.functional.isParameters(p),
    );
