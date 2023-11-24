import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createIsParse_ClassMethod = _test_json_isParse(
  "ClassMethod",
)<ClassMethod>(ClassMethod)(typia.json.createIsParse<ClassMethod>());
