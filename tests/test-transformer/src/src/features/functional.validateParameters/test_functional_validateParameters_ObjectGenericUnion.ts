import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateParameters_ObjectGenericUnion = (): void => _test_functional_validateParameters(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.validateParameters(p),
)