import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_isParse_ObjectPartialAndRequired = (): void => _test_json_isParse(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.json.isParse<ObjectPartialAndRequired>(input));
