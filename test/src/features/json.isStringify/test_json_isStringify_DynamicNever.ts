import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_isStringify_DynamicNever = _test_json_isStringify(
  "DynamicNever",
)<DynamicNever>(DynamicNever)((input) =>
  typia.json.isStringify<DynamicNever>(input),
);
