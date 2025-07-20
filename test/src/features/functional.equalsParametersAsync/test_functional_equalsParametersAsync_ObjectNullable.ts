import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsParametersAsync_ObjectNullable =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectNullable")(ObjectNullable)(
      (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
        typia.functional.equalsParameters(p),
    );
