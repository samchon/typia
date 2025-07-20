import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_assertStringify_ObjectIntersection = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectIntersection",
  )<ObjectIntersection>(ObjectIntersection)((input) =>
    typia.json.assertStringify<ObjectIntersection>(input),
  );
