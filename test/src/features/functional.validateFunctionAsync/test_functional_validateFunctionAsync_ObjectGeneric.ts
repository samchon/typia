import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateFunctionAsync_ObjectGeneric =
  _test_functional_validateFunctionAsync("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.validateFunction(p),
  );
