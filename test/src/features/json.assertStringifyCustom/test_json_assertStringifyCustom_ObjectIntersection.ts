import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_assertStringifyCustom_ObjectIntersection =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.json.assertStringify<ObjectIntersection>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
