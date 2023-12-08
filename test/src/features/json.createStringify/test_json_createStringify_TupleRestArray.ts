import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createStringify_TupleRestArray = _test_json_stringify(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)(typia.json.createStringify<TupleRestArray>());
