import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_isParse_DynamicUndefined = (): void =>
  _test_json_isParse("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
    (input) => typia.json.isParse<DynamicUndefined>(input),
  );
