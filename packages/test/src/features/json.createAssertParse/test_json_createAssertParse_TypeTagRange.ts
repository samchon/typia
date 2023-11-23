import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createAssertParse_TypeTagRange = _test_json_assertParse(
  "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.json.createAssertParse<TypeTagRange>());
