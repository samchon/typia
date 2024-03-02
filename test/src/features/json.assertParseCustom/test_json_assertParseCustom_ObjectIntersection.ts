import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_assertParseCustom_ObjectIntersection =
  _test_json_assertParse(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.json.assertParse<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
