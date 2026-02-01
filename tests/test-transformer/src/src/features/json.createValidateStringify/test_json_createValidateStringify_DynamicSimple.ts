import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createValidateStringify_DynamicSimple = (): void => _test_json_validateStringify(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.json.createValidateStringify<DynamicSimple>());
