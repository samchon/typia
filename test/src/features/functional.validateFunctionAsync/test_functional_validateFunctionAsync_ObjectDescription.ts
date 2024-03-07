import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateFunctionAsync_ObjectDescription =
  _test_functional_validateFunctionAsync("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.validateFunction(p),
  );
