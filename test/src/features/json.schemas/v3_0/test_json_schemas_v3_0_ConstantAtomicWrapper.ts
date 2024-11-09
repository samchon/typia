import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ConstantAtomicWrapper = 
  _test_json_schemas({
    version: "3.0",
    name: "ConstantAtomicWrapper", 
  })(typia.json.schemas<[ConstantAtomicWrapper], "3.0">());