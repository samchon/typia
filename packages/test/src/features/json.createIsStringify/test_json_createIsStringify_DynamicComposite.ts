import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createIsStringify_DynamicComposite =
  _test_json_isStringify("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.json.createIsStringify<DynamicComposite>());
