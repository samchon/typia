import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateParametersAsync_ObjectHttpNullable =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      typia.functional.validateParameters(p),
    );
