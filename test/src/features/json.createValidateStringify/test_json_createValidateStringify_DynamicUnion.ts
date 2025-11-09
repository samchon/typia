import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createValidateStringify_DynamicUnion = (): void => _test_json_validateStringify(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.json.createValidateStringify<DynamicUnion>());
