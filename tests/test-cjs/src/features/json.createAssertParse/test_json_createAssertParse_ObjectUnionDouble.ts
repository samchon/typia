import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createAssertParse_ObjectUnionDouble = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertParse<ObjectUnionDouble>(),
  );
