import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_isStringify_DynamicUnion = _test_json_isStringify(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  typia.json.isStringify<DynamicUnion>(input),
);
