import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createIsStringify_DynamicUnion = (): void => _test_json_isStringify(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.json.createIsStringify<DynamicUnion>());
