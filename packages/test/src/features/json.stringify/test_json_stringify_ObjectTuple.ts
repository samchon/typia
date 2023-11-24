import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_stringify_ObjectTuple = _test_json_stringify(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.json.stringify<ObjectTuple>(input),
);
