import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectUnionImplicit =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertStringify<ObjectUnionImplicit>(),
  );
