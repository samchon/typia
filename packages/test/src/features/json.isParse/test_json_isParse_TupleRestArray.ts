import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_isParse_TupleRestArray = _test_json_isParse(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  typia.json.isParse<TupleRestArray>(input),
);
