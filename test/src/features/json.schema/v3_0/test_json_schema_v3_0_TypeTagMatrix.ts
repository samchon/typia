import typia from "typia";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_TypeTagMatrix = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TypeTagMatrix", 
  })(typia.json.schema<TypeTagMatrix, "3.0">());