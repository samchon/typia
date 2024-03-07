import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateFunctionAsync_ObjectInternal =
  _test_functional_validateFunctionAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.validateFunction(p),
  );
