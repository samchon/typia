import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createStringify_ObjectIntersection =
  _test_json_stringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )(typia.json.createStringify<ObjectIntersection>());
