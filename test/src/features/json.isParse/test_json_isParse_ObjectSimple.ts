import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_isParse_ObjectSimple = (): void => _test_json_isParse(
    "ObjectSimple",
)<ObjectSimple>(
    ObjectSimple
)((input) => typia.json.isParse<ObjectSimple>(input));
