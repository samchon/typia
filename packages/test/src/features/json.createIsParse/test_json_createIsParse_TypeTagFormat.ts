import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_json_createIsParse_TypeTagFormat = _test_json_isParse(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)(typia.json.createIsParse<TypeTagFormat>());
