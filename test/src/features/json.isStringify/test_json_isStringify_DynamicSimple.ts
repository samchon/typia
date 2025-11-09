import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_isStringify_DynamicSimple = (): void => _test_json_isStringify(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)((input) => typia.json.isStringify<DynamicSimple>(input));
