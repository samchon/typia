import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createStringify_DynamicComposite = _test_json_stringify(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  typia.json.createStringify<DynamicComposite>(),
);
