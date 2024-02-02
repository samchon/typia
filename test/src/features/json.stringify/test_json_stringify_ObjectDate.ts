import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_stringify_ObjectDate = _test_json_stringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) => typia.json.stringify<ObjectDate>(input));
