import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_schemas_v3_1_ArrayUnion = _test_json_schemas({
  version: "3.1",
  name: "ArrayUnion",
})(typia.json.schemas<[ArrayUnion], "3.1">());
