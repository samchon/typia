import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsReturn_ObjectGenericUnion = _test_functional_equalsReturn(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.equalsReturn(p),
)