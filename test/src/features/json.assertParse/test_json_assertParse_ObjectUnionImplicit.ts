import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectUnionImplicit = _test_json_assertParse(
  TypeGuardError,
)("ObjectUnionImplicit")<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  typia.json.assertParse<ObjectUnionImplicit>(input),
);
