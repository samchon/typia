import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_createValidateParse_ObjectUndefined = (): void => _test_json_validateParse(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)(typia.json.createValidateParse<ObjectUndefined>());
