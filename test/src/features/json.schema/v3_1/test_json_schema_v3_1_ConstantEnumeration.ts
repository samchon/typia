import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ConstantEnumeration = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ConstantEnumeration", 
  })(typia.json.schema<ConstantEnumeration, "3.1">());