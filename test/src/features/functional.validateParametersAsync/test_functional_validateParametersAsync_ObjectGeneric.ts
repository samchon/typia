import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_validateParametersAsync_ObjectGeneric =
  _test_functional_validateParametersAsync("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.validateParameters(p),
  );
