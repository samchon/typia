import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_assertParse_DynamicComposite = _test_json_assertParse(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.json.assertParse<DynamicComposite>(input),
);
