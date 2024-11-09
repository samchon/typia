import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ConstantAtomicAbsorbed = 
  _test_json_schemas({
    version: "3.1",
    name: "ConstantAtomicAbsorbed", 
  })(typia.json.schemas<[ConstantAtomicAbsorbed], "3.1">());