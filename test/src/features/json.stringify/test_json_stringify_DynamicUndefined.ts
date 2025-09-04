import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_stringify_DynamicUndefined = (): void =>
  _test_json_stringify("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
    (input) => typia.json.stringify<DynamicUndefined>(input),
  );
