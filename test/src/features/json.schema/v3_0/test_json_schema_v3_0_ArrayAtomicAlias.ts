import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_schema_v3_0_ArrayAtomicAlias = _test_json_schema({
  version: "3.0",
  name: "ArrayAtomicAlias",
})(typia.json.schema<ArrayAtomicAlias, "3.0">());
