import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createStringify_ConstantIntersection = _test_json_stringify(
    "ConstantIntersection",
)<ConstantIntersection>(
    ConstantIntersection
)(typia.json.createStringify<ConstantIntersection>());
