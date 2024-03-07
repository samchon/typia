import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateFunctionAsync_ObjectAlias =
  _test_functional_validateFunctionAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.validateFunction(p),
  );
