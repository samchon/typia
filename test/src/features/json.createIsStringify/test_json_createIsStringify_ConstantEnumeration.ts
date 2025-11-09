import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_createIsStringify_ConstantEnumeration = (): void => _test_json_isStringify(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.json.createIsStringify<ConstantEnumeration>());
