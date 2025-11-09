import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createStringify_DynamicTree = (): void =>
  _test_json_stringify("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.json.createStringify<DynamicTree>(),
  );
