import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_createStringify_DynamicUndefined = (): void =>
  _test_json_stringify("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
    typia.json.createStringify<DynamicUndefined>(),
  );
