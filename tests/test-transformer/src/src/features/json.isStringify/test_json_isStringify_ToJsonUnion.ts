import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_isStringify_ToJsonUnion = (): void => _test_json_isStringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.json.isStringify<ToJsonUnion>(input));
