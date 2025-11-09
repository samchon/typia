import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_isParse_ObjectUnionDouble = (): void => _test_json_isParse(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)((input) => typia.json.isParse<ObjectUnionDouble>(input));
