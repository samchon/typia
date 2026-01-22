import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_json_schemas_v3_0_TypeTagPattern = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagPattern",
  })(typia.json.schemas<[TypeTagPattern], "3.0">());
