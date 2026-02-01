import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_isParse_ObjectTuple = (): void => _test_json_isParse(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.json.isParse<ObjectTuple>(input));
