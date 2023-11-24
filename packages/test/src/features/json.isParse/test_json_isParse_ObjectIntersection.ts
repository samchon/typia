import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_isParse_ObjectIntersection = _test_json_isParse(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)((input) =>
  typia.json.isParse<ObjectIntersection>(input),
);
