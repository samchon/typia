import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateFunctionAsync_ObjectRequired =
  _test_functional_validateFunctionAsync("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.validateFunction(p),
  );
