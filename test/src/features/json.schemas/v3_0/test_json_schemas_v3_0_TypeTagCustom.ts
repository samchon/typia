import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_schemas_v3_0_TypeTagCustom = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagCustom",
  })(typia.json.schemas<[TypeTagCustom], "3.0">());
