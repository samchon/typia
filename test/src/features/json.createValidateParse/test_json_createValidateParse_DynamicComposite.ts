import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createValidateParse_DynamicComposite =
  _test_json_validateParse("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.json.createValidateParse<DynamicComposite>());
