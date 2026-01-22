import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_createAssertParse_ObjectUnionImplicit = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createAssertParse<ObjectUnionImplicit>(),
  );
