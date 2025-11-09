import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateParametersAsync_ObjectUndefined =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectUndefined")(
      ObjectUndefined,
    )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.validateParameters(p),
    );
