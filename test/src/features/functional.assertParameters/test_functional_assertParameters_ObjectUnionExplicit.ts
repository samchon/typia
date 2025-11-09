import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectUnionExplicit = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) => typia.functional.assertParameters(p),
)