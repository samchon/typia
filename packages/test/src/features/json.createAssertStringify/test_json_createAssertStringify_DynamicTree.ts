import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_createAssertStringify_DynamicTree =
  _test_json_assertStringify("DynamicTree")<DynamicTree>(DynamicTree)(
    typia.json.createAssertStringify<DynamicTree>(),
  );
