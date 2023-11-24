import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_validateParse_ObjectSimple = _test_json_validateParse(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  typia.json.validateParse<ObjectSimple>(input),
);
