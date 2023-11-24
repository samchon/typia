import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createIsStringify_ObjectIntersection =
  _test_json_isStringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.json.createIsStringify<ObjectIntersection>());
