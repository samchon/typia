import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createIsParse_TypeTagCustom = (): void => _test_json_isParse(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)(typia.json.createIsParse<TypeTagCustom>());
