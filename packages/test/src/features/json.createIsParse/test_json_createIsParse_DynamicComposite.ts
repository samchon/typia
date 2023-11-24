import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_json_createIsParse_DynamicComposite = _test_json_isParse(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  typia.json.createIsParse<DynamicComposite>(),
);
