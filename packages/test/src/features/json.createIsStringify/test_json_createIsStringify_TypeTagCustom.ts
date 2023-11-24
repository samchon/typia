import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createIsStringify_TypeTagCustom = _test_json_isStringify(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)(typia.json.createIsStringify<TypeTagCustom>());
