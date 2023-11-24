import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createIsParse_DynamicTree = _test_json_isParse(
  "DynamicTree",
)<DynamicTree>(DynamicTree)(typia.json.createIsParse<DynamicTree>());
