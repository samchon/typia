import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagCustom = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagCustom", 
  })(typia.json.schemas<[TypeTagCustom], "3.0">());