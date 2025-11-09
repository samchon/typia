import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_json_stringify_ToJsonUnion = (): void => _test_json_stringify(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.json.stringify<ToJsonUnion>(input));
