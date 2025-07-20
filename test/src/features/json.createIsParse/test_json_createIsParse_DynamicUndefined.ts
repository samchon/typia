import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_createIsParse_DynamicUndefined = (): void =>
  _test_json_isParse("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
    typia.json.createIsParse<DynamicUndefined>(),
  );
