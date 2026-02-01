import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_validateStringify_ToJsonUnion = (): void => _test_json_validateStringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.json.validateStringify<ToJsonUnion>(input));
