import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createAssertStringify_DynamicComposite =
  _test_json_assertStringify("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.json.createAssertStringify<DynamicComposite>());
