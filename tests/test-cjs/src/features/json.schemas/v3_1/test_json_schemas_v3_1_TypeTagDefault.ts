import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_json_schemas_v3_1_TypeTagDefault = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagDefault",
  })(typia.json.schemas<[TypeTagDefault], "3.1">());
