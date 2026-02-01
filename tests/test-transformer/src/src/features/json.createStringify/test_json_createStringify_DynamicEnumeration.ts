import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_createStringify_DynamicEnumeration = (): void => _test_json_stringify(
    "DynamicEnumeration",
)<DynamicEnumeration>(
    DynamicEnumeration
)(typia.json.createStringify<DynamicEnumeration>());
