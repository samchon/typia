import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_validateParse_ObjectPartialAndRequired = (): void => _test_json_validateParse(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.json.validateParse<ObjectPartialAndRequired>(input));
