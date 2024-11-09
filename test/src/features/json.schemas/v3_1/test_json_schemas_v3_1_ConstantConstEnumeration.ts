import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ConstantConstEnumeration = 
  _test_json_schemas({
    version: "3.1",
    name: "ConstantConstEnumeration", 
  })(typia.json.schemas<[ConstantConstEnumeration], "3.1">());