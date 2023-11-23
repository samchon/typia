import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_createAssertStringify_DynamicSimple =
  _test_json_assertStringify("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    typia.json.createAssertStringify<DynamicSimple>(),
  );
