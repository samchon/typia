import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagType = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagType", 
  })(typia.json.schema<TypeTagType, "3.1">());