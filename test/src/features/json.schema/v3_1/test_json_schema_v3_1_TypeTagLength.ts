import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagLength = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagLength", 
  })(typia.json.schema<TypeTagLength, "3.1">());