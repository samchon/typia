import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagPattern = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagPattern", 
  })(typia.json.schema<TypeTagPattern, "3.1">());