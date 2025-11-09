import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ConstantIntersection = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ConstantIntersection", 
  })(typia.json.schema<ConstantIntersection, "3.1">());