import typia from "../../../src";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createIsStringify_DynamicConstant = _test_json_isStringify(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.json.createIsStringify<DynamicConstant>());
