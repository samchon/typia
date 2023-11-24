import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_assertParse_ObjectRequired = _test_json_assertParse(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.json.assertParse<ObjectRequired>(input),
);
