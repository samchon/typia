import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createIsStringify_TypeTagType = _test_json_isStringify(
  "TypeTagType",
)<TypeTagType>(TypeTagType)(typia.json.createIsStringify<TypeTagType>());
