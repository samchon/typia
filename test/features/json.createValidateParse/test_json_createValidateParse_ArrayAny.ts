import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createValidateParse_ArrayAny = _test_json_validateParse(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.json.createValidateParse<ArrayAny>());
