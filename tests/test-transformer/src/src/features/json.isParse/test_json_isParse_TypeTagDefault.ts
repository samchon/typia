import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_isParse_TypeTagDefault = (): void => _test_json_isParse(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.json.isParse<TypeTagDefault>(input));
