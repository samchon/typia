import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_isParse_TypeTagTuple = (): void => _test_json_isParse(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)((input) => typia.json.isParse<TypeTagTuple>(input));
