import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_validateParse_DynamicComposite = (): void =>
  _test_json_validateParse("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.json.validateParse<DynamicComposite>(input));
