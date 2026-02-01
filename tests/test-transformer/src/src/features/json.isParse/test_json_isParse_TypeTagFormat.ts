import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_isParse_TypeTagFormat = (): void => _test_json_isParse(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.json.isParse<TypeTagFormat>(input));
