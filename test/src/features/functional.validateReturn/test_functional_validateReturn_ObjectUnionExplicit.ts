import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_validateReturn_ObjectUnionExplicit = (): void => _test_functional_validateReturn(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) => typia.functional.validateReturn(p),
)