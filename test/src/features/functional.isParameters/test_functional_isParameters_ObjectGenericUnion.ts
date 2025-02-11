import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_isParameters_ObjectGenericUnion = _test_functional_isParameters(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.isParameters(p),
)