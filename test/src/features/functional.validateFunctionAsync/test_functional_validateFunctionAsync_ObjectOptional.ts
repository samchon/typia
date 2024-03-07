import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateFunctionAsync_ObjectOptional =
  _test_functional_validateFunctionAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.validateFunction(p),
  );
