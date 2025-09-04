import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateParametersAsync_ObjectRequired =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectRequired")(ObjectRequired)(
      (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
        typia.functional.validateParameters(p),
    );
