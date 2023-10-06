import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_createIsParse_ArrayRepeatedUnion = _test_json_isParse(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.json.createIsParse<ArrayRepeatedUnion>());
