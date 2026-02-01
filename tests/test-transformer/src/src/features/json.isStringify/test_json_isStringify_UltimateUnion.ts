import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_isStringify_UltimateUnion = (): void => _test_json_isStringify(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.json.isStringify<UltimateUnion>(input));
