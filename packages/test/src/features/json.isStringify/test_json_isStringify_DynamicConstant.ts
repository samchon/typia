import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_isStringify_DynamicConstant = _test_json_isStringify(
  "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
  typia.json.isStringify<DynamicConstant>(input),
);
