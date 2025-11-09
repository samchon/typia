import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateEqualsParameters_ObjectGenericUnion = (): void => _test_functional_validateEqualsParameters(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.validateEqualsParameters(p),
)