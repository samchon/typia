import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectUnionExplicit = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)