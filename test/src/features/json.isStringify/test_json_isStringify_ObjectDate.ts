import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_isStringify_ObjectDate = _test_json_isStringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) => typia.json.isStringify<ObjectDate>(input));
