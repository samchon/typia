import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_createValidateStringify_ArrayAny = _test_json_validateStringify(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.json.createValidateStringify<ArrayAny>());
