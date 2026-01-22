import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_schema_v3_0_ArrayRepeatedUnionWithTuple = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.json.schema<ArrayRepeatedUnionWithTuple, "3.0">());
