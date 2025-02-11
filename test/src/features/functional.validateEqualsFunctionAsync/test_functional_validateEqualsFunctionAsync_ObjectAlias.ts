import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsFunctionAsync_ObjectAlias =
  _test_functional_validateEqualsFunctionAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.validateEqualsFunction(p),
  );
