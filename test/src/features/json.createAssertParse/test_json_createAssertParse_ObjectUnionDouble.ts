import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectUnionDouble =
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.json.createAssertParse<ObjectUnionDouble>(),
  );
