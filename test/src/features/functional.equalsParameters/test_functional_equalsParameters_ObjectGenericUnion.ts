import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsParameters_ObjectGenericUnion = (): void => _test_functional_equalsParameters(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.equalsParameters(p),
)