import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createValidateParse_ArraySimple = (): void => _test_json_validateParse(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)(typia.json.createValidateParse<ArraySimple>());
