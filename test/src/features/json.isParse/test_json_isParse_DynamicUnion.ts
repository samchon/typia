import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_isParse_DynamicUnion = (): void => _test_json_isParse(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((input) => typia.json.isParse<DynamicUnion>(input));
