import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_schemas_v3_0_TupleRestArray = _test_json_schemas({
  version: "3.0",
  name: "TupleRestArray",
})(typia.json.schemas<[TupleRestArray], "3.0">());
