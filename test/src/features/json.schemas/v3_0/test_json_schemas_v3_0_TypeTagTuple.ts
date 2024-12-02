import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_schemas_v3_0_TypeTagTuple = _test_json_schemas({
  version: "3.0",
  name: "TypeTagTuple",
})(typia.json.schemas<[TypeTagTuple], "3.0">());
