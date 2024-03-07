import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectUnionImplicit =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.json.assertStringify<ObjectUnionImplicit>(input),
  );
