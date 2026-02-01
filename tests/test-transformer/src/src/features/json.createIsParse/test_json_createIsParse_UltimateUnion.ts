import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_createIsParse_UltimateUnion = (): void => _test_json_isParse(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)(typia.json.createIsParse<UltimateUnion>());
