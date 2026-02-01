import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_validateParse_DynamicUndefined = (): void => _test_json_validateParse(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)((input) => typia.json.validateParse<DynamicUndefined>(input));
