import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createAssertParse_ObjectIntersection =
  _test_json_assertParse(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.json.createAssertParse<ObjectIntersection>(),
  );
