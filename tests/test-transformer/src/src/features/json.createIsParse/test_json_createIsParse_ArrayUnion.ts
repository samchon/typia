import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_createIsParse_ArrayUnion = (): void => _test_json_isParse(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.json.createIsParse<ArrayUnion>());
