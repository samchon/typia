import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsFunction_ObjectGenericUnion = _test_functional_equalsFunction(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.equalsFunction(p),
)