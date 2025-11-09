import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_createIsStringify_ToJsonUnion = (): void => _test_json_isStringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.json.createIsStringify<ToJsonUnion>());
