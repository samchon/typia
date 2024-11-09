import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ConstantEnumeration = 
  _test_json_schemas({
    version: "3.1",
    name: "ConstantEnumeration", 
  })(typia.json.schemas<[ConstantEnumeration], "3.1">());