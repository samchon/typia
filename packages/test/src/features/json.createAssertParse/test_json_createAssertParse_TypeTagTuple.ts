import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_json_createAssertParse_TypeTagTuple = _test_json_assertParse(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(typia.json.createAssertParse<TypeTagTuple>());
