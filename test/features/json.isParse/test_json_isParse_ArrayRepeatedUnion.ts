import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_isParse_ArrayRepeatedUnion = _test_json_isParse(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((input) => typia.json.isParse<ArrayRepeatedUnion>(input));
