import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createValidateParse_ObjectPartialAndRequired = (): void => _test_json_validateParse(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)(typia.json.createValidateParse<ObjectPartialAndRequired>());
