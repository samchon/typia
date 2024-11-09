import typia from "typia";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ToJsonAtomicSimple = 
  _test_json_schemas({
    version: "3.0",
    name: "ToJsonAtomicSimple", 
  })(typia.json.schemas<[ToJsonAtomicSimple], "3.0">());