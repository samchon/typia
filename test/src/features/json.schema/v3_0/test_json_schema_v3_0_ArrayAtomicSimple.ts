import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_schema_v3_0_ArrayAtomicSimple = _test_json_schema({
  version: "3.0",
  name: "ArrayAtomicSimple",
})(typia.json.schema<ArrayAtomicSimple, "3.0">());
