import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createAssertStringify_ObjectIntersection =
  _test_json_assertStringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.json.createAssertStringify<ObjectIntersection>());
