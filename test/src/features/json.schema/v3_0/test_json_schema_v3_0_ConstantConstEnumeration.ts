import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ConstantConstEnumeration = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantConstEnumeration", 
  })(typia.json.schema<ConstantConstEnumeration, "3.0">());