import typia from "typia";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagCustom = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagCustom", 
  })(typia.json.schema<TypeTagCustom, "3.1">());