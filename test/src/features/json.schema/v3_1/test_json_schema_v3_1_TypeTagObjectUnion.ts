import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TypeTagObjectUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TypeTagObjectUnion", 
  })(typia.json.schema<TypeTagObjectUnion, "3.1">());