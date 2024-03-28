import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createAssertParseCustom_ObjectIntersection =
  _test_json_assertParse(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)(
    typia.json.createAssertParse<ObjectIntersection>(
      (p) => new CustomGuardError(p),
    ),
  );
