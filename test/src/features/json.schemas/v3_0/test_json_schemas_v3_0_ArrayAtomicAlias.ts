import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_schemas_v3_0_ArrayAtomicAlias = _test_json_schemas({
  version: "3.0",
  name: "ArrayAtomicAlias",
})(typia.json.schemas<[ArrayAtomicAlias], "3.0">());
