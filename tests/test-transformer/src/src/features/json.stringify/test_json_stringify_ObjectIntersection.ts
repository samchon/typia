import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_json_stringify_ObjectIntersection = (): void => _test_json_stringify(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)((input) => typia.json.stringify<ObjectIntersection>(input));
