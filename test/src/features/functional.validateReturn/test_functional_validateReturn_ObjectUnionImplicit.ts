import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateReturn_ObjectUnionImplicit = (): void => _test_functional_validateReturn(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) => typia.functional.validateReturn(p),
)