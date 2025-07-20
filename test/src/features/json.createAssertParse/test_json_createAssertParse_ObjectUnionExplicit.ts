import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createAssertParse_ObjectUnionExplicit = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionExplicit",
  )<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.json.createAssertParse<ObjectUnionExplicit>(),
  );
