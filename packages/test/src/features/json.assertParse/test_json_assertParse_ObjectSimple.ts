import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_assertParse_ObjectSimple = _test_json_assertParse(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.json.assertParse<ObjectSimple>(input),
);
