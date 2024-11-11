import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_schemas_v3_0_TypeTagArray = _test_json_schemas({
  version: "3.0",
  name: "TypeTagArray",
})(typia.json.schemas<[TypeTagArray], "3.0">());
