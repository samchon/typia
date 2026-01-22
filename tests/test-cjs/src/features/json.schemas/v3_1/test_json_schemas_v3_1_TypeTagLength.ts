import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_json_schemas_v3_1_TypeTagLength = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagLength",
  })(typia.json.schemas<[TypeTagLength], "3.1">());
