import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_createStringify_DynamicUnion = _test_json_stringify(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.json.createStringify<DynamicUnion>());
