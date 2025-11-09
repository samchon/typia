import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_createValidateParse_DynamicNever = (): void => _test_json_validateParse(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.json.createValidateParse<DynamicNever>());
