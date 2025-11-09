import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_schema_v3_1_TupleRestArray = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TupleRestArray",
  })(typia.json.schema<TupleRestArray, "3.1">());
