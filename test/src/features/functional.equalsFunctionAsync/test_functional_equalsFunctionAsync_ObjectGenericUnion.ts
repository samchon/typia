import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsFunctionAsync_ObjectGenericUnion = _test_functional_equalsFunctionAsync(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.equalsFunction(p),
)