import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_createIsParse_ObjectIntersection = (): void => _test_json_isParse(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.json.createIsParse<ObjectIntersection>());
