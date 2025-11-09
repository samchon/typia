import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_json_createIsParse_TypeTagPattern = (): void => _test_json_isParse(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.json.createIsParse<TypeTagPattern>());
