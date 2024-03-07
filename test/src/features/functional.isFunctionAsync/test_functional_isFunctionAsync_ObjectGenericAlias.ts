import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_isFunctionAsync_ObjectGenericAlias =
  _test_functional_isFunctionAsync("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.isFunction(p),
  );
