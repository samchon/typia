import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_validateReturn_ObjectGenericUnion = (): void => _test_functional_validateReturn(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => ObjectGenericUnion) => typia.functional.validateReturn(p),
)