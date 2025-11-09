import typia from "typia";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagTuple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagTuple", 
  })(typia.json.schema<TypeTagTuple, "3.1">());