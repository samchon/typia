import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_createAssertStringify_ObjectUnionImplicit = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertStringify<ObjectUnionImplicit>(),
  );
