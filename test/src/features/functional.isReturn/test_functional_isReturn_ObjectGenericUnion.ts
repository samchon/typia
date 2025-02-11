import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_isReturn_ObjectGenericUnion = _test_functional_isReturn(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.isReturn(p),
)