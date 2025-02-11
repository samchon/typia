import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_isFunctionAsync_ObjectGenericUnion =
  _test_functional_isFunctionAsync("ObjectGenericUnion")(ObjectGenericUnion)(
    (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
      typia.functional.isFunction(p),
  );
