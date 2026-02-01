import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createIsStringify_ConstantIntersection = (): void => _test_json_isStringify(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.json.createIsStringify<ConstantIntersection>());
